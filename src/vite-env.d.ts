// FIX: The reference to `vite/client` was failing, so it has been removed.
// The interfaces for `ImportMetaEnv` and `ImportMeta` are now manually defined
// to provide correct typings for environment variables from Vite.

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
