import { browser } from '$app/environment';

interface SafeEnvProps {
  required?: boolean;
  fallback?: string;
}

type SafeEnv = (name: string, props?: SafeEnvProps) => string | undefined;

const DEFAULT_PROPS = {
  required: true,
  allowClient: false,
};

const clientPattern = new RegExp(/^VITE_/);

export const safeEnv: SafeEnv = (name, { required, fallback } = DEFAULT_PROPS) => {
  if (browser && clientPattern.test(name)) {
    const clientEnvValue = (import.meta.env[name] !== undefined && String(import.meta.env[name])) || fallback;

    return clientEnvValue;
  }

  const envValue = (name && process.env[name]) || fallback;

  if (required && !envValue) {
    console.warn(
      `Required variable ${name} is not set.
      If you intend to run the application, please set a value for the variable,
      and rebuild the application.
      `,
    );
  }

  return envValue;
};
