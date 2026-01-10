import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { SIMULATOR_CONSTANTS } from '../../lib/constants';
import { ArrowRight, TrendingUp, Briefcase, Euro } from 'lucide-react';

interface GrowthSimulatorProps {
  onContactClick: () => void;
  isPage?: boolean;
}

const formatCurrency = (value: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(value);
const formatNumber = (value: number) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 }).format(value);

const CustomTooltip = ({ active, payload, label, view }: any) => {
  if (active && payload && payload.length) {
    const currentData = payload.find((p: any) => p.dataKey === 'current');
    const leadesiaData = payload.find((p: any) => p.dataKey === 'leadesia');
    const gain = leadesiaData.value - currentData.value;
    
    return (
      <div className="bg-white p-4 rounded-sm shadow-lg border border-gray-200 text-sm">
        <p className="font-bold text-gray-800 mb-2">{label}</p>
        {currentData && (
          <div style={{ color: currentData.stroke || currentData.fill }}>
            Situation actuelle: <strong>{view === 'ca' ? formatCurrency(currentData.value) : `${formatNumber(currentData.value)}`}</strong>
          </div>
        )}
        {leadesiaData && (
          <div style={{ color: leadesiaData.stroke || leadesiaData.fill }}>
            Projection Leadesia: <strong>{view === 'ca' ? formatCurrency(leadesiaData.value) : `${formatNumber(leadesiaData.value)}`}</strong>
          </div>
        )}
        {gain > 0 && (
           <div className="mt-2 pt-2 border-t border-gray-100 font-semibold" style={{ color: leadesiaData.stroke || leadesiaData.fill }}>
            Gain : +{view === 'ca' ? formatCurrency(gain) : `${formatNumber(gain)}`}
          </div>
        )}
      </div>
    );
  }
  return null;
};

const GrowthSimulator: React.FC<GrowthSimulatorProps> = ({ onContactClick, isPage = false }) => {
  const [investment, setInvestment] = useState(1000);
  const [avgFee, setAvgFee] = useState(3500);
  const [currentCases, setCurrentCases] = useState(1);
  const [budgetIncrease, setBudgetIncrease] = useState(30); // Percentage
  const [view, setView] = useState<'dossiers' | 'ca'>('dossiers');

  const calculations = useMemo(() => {
    const { META_BUDGET_RATIO, COST_PER_LEAD, SIGNATURE_CONVERSION_RATE } = SIMULATOR_CONSTANTS;
    
    const results = [];
    let totalNewCases = 0;
    let totalAdditionalRevenue = 0;
    let totalInvestment = 0;
    
    // Iterative calculation for the 6-month chart
    for (let i = 0; i < 6; i++) {
        const monthlyBudget = investment * Math.pow(1 + budgetIncrease / 100, i);
        totalInvestment += monthlyBudget;

        const cplTranches = Math.floor(monthlyBudget / 10000);
        const effectiveCPL = COST_PER_LEAD * Math.pow(1.2, cplTranches);
        
        const newCasesThisMonth = Math.ceil(((monthlyBudget * META_BUDGET_RATIO) / effectiveCPL) * SIGNATURE_CONVERSION_RATE);
        totalNewCases += newCasesThisMonth;

        const additionalRevenueThisMonth = newCasesThisMonth * avgFee;
        totalAdditionalRevenue += additionalRevenueThisMonth;
        
        const totalProjectedCases = currentCases + newCasesThisMonth;
        const projectedRevenue = totalProjectedCases * avgFee;

        results.push({
            name: `Mois ${i + 1}`,
            current: view === 'dossiers' ? currentCases : (currentCases * avgFee),
            leadesia: view === 'dossiers' ? totalProjectedCases : projectedRevenue,
        });
    }

    const avgNewCases = totalNewCases / 6;
    const avgAdditionalRevenue = totalAdditionalRevenue / 6;
    const totalRoi = totalInvestment > 0 ? (totalAdditionalRevenue - totalInvestment) / totalInvestment : 0;
    
    return { avgNewCases, avgAdditionalRevenue, totalRoi, chartData: results };
  }, [investment, avgFee, currentCases, budgetIncrease, view]);

  return (
    <section id="simulateur" className={`py-24 scroll-mt-24 ${isPage ? '' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-burgundy uppercase tracking-widest mb-2">Simulateur</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Projetez la croissance de votre cabinet
            </h3>
            <p className="text-gray-600 mt-4">
              Ajustez les paramètres pour visualiser en temps réel l'impact de notre service sur votre volume de dossiers et votre chiffre d'affaires.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 bg-brand-cream p-8 rounded-sm border border-brand-gold/20">
            <h4 className="font-bold text-xl text-brand-black mb-6">Vos paramètres</h4>
            <div className="space-y-8">
              <div>
                <label htmlFor="currentCases" className="block text-sm font-medium text-gray-700">Dossiers actuels / mois</label>
                <div className="flex items-center gap-4 mt-2">
                  <input id="currentCases" type="range" min="0" max="10" step="1" value={currentCases} onChange={(e) => setCurrentCases(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                   <div className="relative w-28">
                    <input type="number" value={currentCases} onChange={(e) => setCurrentCases(Number(e.target.value))} className="w-full pl-3 pr-6 py-1 text-right rounded-sm border border-gray-300 focus:ring-1 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all text-sm"/>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="avgFee" className="block text-sm font-medium text-gray-700">Honoraires moyens / dossier</label>
                <div className="relative mt-2">
                  <input id="avgFee" type="number" step="100" value={avgFee} onChange={(e) => setAvgFee(Number(e.target.value))} className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all" />
                  <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">€</span>
                </div>
              </div>
              <div>
                <label htmlFor="investment" className="block text-sm font-medium text-gray-700">Investissement publicitaire mensuel</label>
                <div className="flex items-center gap-4 mt-2">
                  <input id="investment" type="range" min="1000" max="10000" step="100" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="relative w-28">
                    <input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full pl-3 pr-6 py-1 text-right rounded-sm border border-gray-300 focus:ring-1 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all text-sm"/>
                    <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-sm">€</span>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="budgetIncrease" className="block text-sm font-medium text-gray-700">Augmentation budget pub / mois</label>
                <div className="flex items-center gap-4 mt-2">
                  <input id="budgetIncrease" type="range" min="0" max="10" step="1" value={budgetIncrease} onChange={(e) => setBudgetIncrease(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="relative w-28">
                    <input type="number" value={budgetIncrease} onChange={(e) => setBudgetIncrease(Number(e.target.value))} className="w-full pl-3 pr-6 py-1 text-right rounded-sm border border-gray-300 focus:ring-1 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all text-sm"/>
                    <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
               <div className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm text-center">
                  <Briefcase className="mx-auto text-brand-gold mb-2" />
                  <span className="block text-2xl font-bold text-brand-burgundy">+{formatNumber(calculations.avgNewCases)}</span>
                  <span className="text-xs text-gray-500 font-medium uppercase">Nouv. dossiers moyens / mois</span>
               </div>
               <div className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm text-center">
                  <Euro className="mx-auto text-brand-gold mb-2" />
                  <span className="block text-2xl font-bold text-brand-burgundy">+{formatCurrency(calculations.avgAdditionalRevenue)}</span>
                  <span className="text-xs text-gray-500 font-medium uppercase">C.A. additionnel moyen / mois</span>
               </div>
               <div className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm text-center">
                  <TrendingUp className="mx-auto text-brand-gold mb-2" />
                  <span className="block text-2xl font-bold text-brand-burgundy">x{Math.max(0, calculations.totalRoi + 1).toFixed(1)}</span>
                  <span className="text-xs text-gray-500 font-medium uppercase">Retour sur Invest. (6 mois)</span>
               </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 h-[24rem] w-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Projection sur 6 mois</h3>
                <div className="bg-gray-100 p-1 rounded-sm flex text-xs font-medium">
                  <button onClick={() => setView('dossiers')} className={`px-3 py-1 rounded-sm transition-colors ${view === 'dossiers' ? 'bg-white shadow-sm text-brand-burgundy' : 'text-gray-500'}`}>Dossiers</button>
                  <button onClick={() => setView('ca')} className={`px-3 py-1 rounded-sm transition-colors ${view === 'ca' ? 'bg-white shadow-sm text-brand-burgundy' : 'text-gray-500'}`}>C.A.</button>
                </div>
              </div>
              <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={calculations.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} tickFormatter={(value) => view === 'ca' ? `${value / 1000}k` : value} />
                    <Tooltip cursor={{ stroke: '#c5a065', strokeDasharray: '3 3' }} content={<CustomTooltip view={view} />} />
                    <Legend wrapperStyle={{fontSize: "12px"}} verticalAlign="top" align="right" />
                    <Line type="monotone" dataKey="current" name="Situation Actuelle" stroke="#a0aec0" strokeWidth={3} dot={{ r: 4, fill: '#a0aec0' }} activeDot={{ r: 6 }}/>
                    <Line type="monotone" dataKey="leadesia" name="Projection Leadesia" stroke="#5D181E" strokeWidth={3} dot={{ r: 4, fill: '#5D181E' }} activeDot={{ r: 6 }}/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button onClick={onContactClick} className="w-full sm:w-auto px-8 py-4 btn-burgundy rounded-sm font-medium text-lg shadow-sm flex items-center justify-center gap-2">
                Obtenir ces résultats ce mois-ci <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
            <p className="text-xs text-gray-500 italic max-w-3xl mx-auto">
                *Cette simulation est fournie à titre indicatif et ne constitue pas une garantie de résultats.
            </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSimulator;