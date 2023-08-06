'use client';
import React, { createContext, useState, useEffect } from 'react';

type ThemeContextValue = {
  toggle: () => void;
  mode: string;
};

export const ThemeContext = createContext<ThemeContextValue>(
  {} as ThemeContextValue,
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<string>('light');

  useEffect(() => {
    const storedMode = window.localStorage.getItem('themeMode');
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
