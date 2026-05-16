import { createContext } from 'react';

export interface AuthContextProps {
  isLogged?: boolean;
  onLogout?: () => void;
  onLogin?: (body: unknown) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps>({
  isLogged: true,
  onLogin: undefined,
  onLogout: undefined
});