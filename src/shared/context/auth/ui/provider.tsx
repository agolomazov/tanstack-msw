import React, { useCallback, useEffect, useRef, useState } from 'react'

import { AuthContext } from '../model/context';
import { IS_LOGGED_KEY } from '../model/data';
import type { BroadcastMessage } from '../model/types';
import { BroadcastChannel } from 'broadcast-channel'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(Boolean(localStorage.getItem(IS_LOGGED_KEY)));
  const channelRef = useRef<BroadcastChannel<BroadcastMessage> | null>(null);

  useEffect(() => {
    const channel = new BroadcastChannel('auth-token-channel');
    channelRef.current = channel;

    channel.addEventListener('message', (type: BroadcastMessage) => {
      if (type === 'LOGIN_SUCCESS') {
        setIsLogged(true);
      } else if (type === 'LOGOUT') {
        setIsLogged(false);
      }

      globalThis.location.reload();
    });

    return () => {
      channel.close();
    }
  }, []);

  const onLogin = async () => {
    setIsLogged(true);
    localStorage.setItem(IS_LOGGED_KEY, 'true');

    if (channelRef.current) {
      channelRef.current.postMessage('LOGIN_SUCCESS');
    }

    return true;
  }

  const onLogout = useCallback(async () => {
    localStorage.removeItem(IS_LOGGED_KEY);
    setIsLogged(false);

    if (channelRef.current) {
      channelRef.current.postMessage('LOGOUT');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, onLogin, onLogout }}>{children}</AuthContext.Provider>
  );
}