import axios from 'axios';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import localStorageAvailable from './localStorageAvailable';

/**
 * Decodes a JWT token.
 *
 * @param {string} token - The JWT token to decode.
 * @returns {object} - The decoded payload.
 */
export function jwtDecode(token: string): object {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

/**
 * Validates a JWT token and checks if it is expired.
 *
 * @param {string} token - The JWT token to validate.
 * @returns {boolean} - Returns true if the token is valid and not expired, false otherwise.
 */
export function isTokenValid(token: string | null): JwtPayload | boolean {
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwt.decode(token, { complete: true }) as JwtPayload;

    if (!decodedToken || !decodedToken?.payload?.exp) {
      return false;
    } else if (Date.now() >= decodedToken?.payload?.exp * 1000) {
      return false;
    } else return true;
  } catch (error) {
    return false;
  }
}

/**
 * Refreshes the access token using the refresh token.
 *
 * @param {string} refreshToken - The refresh token.
 * @returns {Promise<string|null>} - Returns the new access token if successful, null otherwise.
 */
export async function refreshToken(refreshToken: any): Promise<string | null> {
  if (!refreshToken) {
    return null;
  }

  try {
    const response = await axios.post('/api/refresh-token', { refreshToken });

    if (response.status === 200) {
      return response.data.token;
    }

    return null;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
}

/**
 * Retrieves the access token from localStorage, checks its validity, and refreshes it if necessary.
 *
 * @returns {Promise<string|null>} - Returns the valid access token, or null if both tokens are invalid.
 */
export async function getValidAccessToken(): Promise<string | null> {
  const storageAvailable = localStorageAvailable();
  let accessToken;
  let refreshTokenLocal;
  if (storageAvailable) {
    accessToken = localStorage.getItem('accessToken');
    refreshTokenLocal = localStorage.getItem('refreshToken');
  }

  if (accessToken && refreshTokenLocal) {
    if (isTokenValid(accessToken)) {
      return accessToken;
    }

    if (!isTokenValid(refreshTokenLocal)) {
      return null;
    }

    const newAccessToken = await refreshToken(refreshToken);

    if (newAccessToken) {
      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    }
  }

  return null;
}
