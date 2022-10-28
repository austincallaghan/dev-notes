import { safeEnv } from './safe-env';

interface FormatCookieOptions {
  secure?: boolean;
  maxAge?: number;
  expires?: string;
}

const cookieDomain = safeEnv('VITE_INVH_DOMAIN_NAME');

export const formatCookie = (name: string, value: string, options?: FormatCookieOptions) => {
  let expiration = `Expires=${new Date('9999').toUTCString()}`;
  if (options?.maxAge) {
    expiration = `Max-Age=${options.maxAge}`;
  } else if (options?.expires) {
    expiration = `Expires=${options.expires}`;
  }

  let cookie = `${name}=${value}; ${expiration}; Domain=${cookieDomain}; Path=/;`;

  if (options?.secure) {
    cookie += ' SameSite=Lax; Secure;';
  }

  return cookie;
};

export const setCookie = (name: string, value: string, ttl = 0): void => {
  document.cookie = formatCookie(name, value, {
    secure: true,
    maxAge: ttl,
  });
};

export const parseCookie = (cookie: string): Record<string, string> => {
  if (typeof cookie !== 'string') {
    throw new TypeError('Invalid cookie provided');
  }

  const splitCookie = cookie.split(';');
  const cookies = splitCookie.reduce((cookieMap, currentCookie) => {
    const [name = '', value = ''] = currentCookie.split('=');

    if (!name || !value) {
      return cookieMap;
    }

    return {
      ...cookieMap,
      [decodeURIComponent(name.trim())]: decodeURIComponent(value.trim()),
    };
  }, {});

  return cookies;
};

export const deleteCookie = (name: string, expirationDate?: number): void => {
  const defaultExpirationDate = 1970;
  if (expirationDate) {
    setCookie(name, '', expirationDate);
  } else {
    setCookie(name, ',', defaultExpirationDate);
  }
};
