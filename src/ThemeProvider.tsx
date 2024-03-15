import React, { createContext, useContext, FC } from 'react';
import "../build/css/_variables.css"

// Defina a forma do seu tema
export interface Theme {
  theme: 'light' | 'dark';
}

// Defina o contexto do tema
const ThemeContext = createContext<Theme | undefined>(undefined);

// Componente de provedor de tema
export const ThemeProvider: FC<{ theme: Theme; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Hook para usar o tema
export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
