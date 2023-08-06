'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export interface IAuthProvider {
  children: ReactNode;
}

const AuthProvider: React.FunctionComponent<IAuthProvider> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
