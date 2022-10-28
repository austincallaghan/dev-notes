/**
 * @jest-environment jsdom
 */
import { formatCookie, setCookie, parseCookie, deleteCookie } from '../../lib/utils/cookie-management';

jest.mock('jwt-decode');
jest.mock('$lib/utils/safe-env', () => {
  return {
    safeEnv: () => 'devinvh.com',
  };
});

Object.defineProperty(window.document, 'cookie', {
  writable: true,
});

Object.defineProperty(window, 'location', {
  value: {
    hostname: 'www.invitationhomes.com',
  },
});

describe('Cookie Management', () => {
  describe('formatCookie', () => {
    it('returns the cookie well formated', () => {
      const cookieExpected = 'accessToken=1234abcd; Max-Age=3600; Domain=devinvh.com; Path=/; SameSite=Lax; Secure;';

      const cookieOptions = {
        domain: 'devinvh.com',
        path: '/',
        secure: true,
        maxAge: 3600,
      };
      const cookie = formatCookie('accessToken', '1234abcd', cookieOptions);

      expect(cookie).toEqual(cookieExpected);
    });
  });
  describe('setCookie', () => {
    it('sets a cookie in the document', () => {
      setCookie('cookieId', '1');

      expect(document.cookie).not.toBeFalsy();
    });
  });

  describe('parseCookie', () => {
    it('Should extract keys of cookie string', () => {
      const cookieToParse = 'cookieId=1; expires=Fri, 01 Jan 9999 00:00:00 GMT; secure=true;';
      const resultCookieObject = {
        cookieId: '1',
        expires: 'Fri, 01 Jan 9999 00:00:00 GMT',
        secure: 'true',
      };
      const result = parseCookie(cookieToParse);
      expect(result).toMatchObject(resultCookieObject);
    });
  });

  describe('deleteCookie', () => {
    it('Should invoke setCookie with the given name to delete cookies', () => {
      setCookie('cookieId', '1');
      deleteCookie('cookieId');
      expect(document.cookie).not.toMatch('cookieId=1');
    });
  });
});
