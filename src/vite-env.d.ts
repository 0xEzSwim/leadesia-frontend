/// <reference types="vite/client" />

// FIX: By referencing vite/client and augmenting ImportMetaEnv, we avoid redeclaring
// built-in Vite environment variables and fix the type errors.
interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
}

// Fix: The `ImportMeta` interface is already provided by the `vite/client` types.
// Redeclaring it here would override the original definition from Vite.
// Augmenting `ImportMetaEnv` is sufficient for adding types for custom env variables.
