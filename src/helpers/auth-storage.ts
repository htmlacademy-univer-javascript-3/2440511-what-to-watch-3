import {AuthInfo} from '../api/interfaces.ts';

const key = 'AuthInfo';

export function getAuthInfo(): AuthInfo | undefined {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) as AuthInfo : undefined;
}

export function setAuthInfo(authInfo: AuthInfo) {
  localStorage.setItem(key, JSON.stringify(authInfo));
}
