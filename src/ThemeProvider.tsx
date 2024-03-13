import React, { createContext, useContext, FC } from 'react';
import '../globals.styles.css';

// Defina a forma do seu tema
export interface Theme {
  type: 'light' | 'dark';
}

// Defina o contexto do tema
const ThemeContext = createContext<Theme | undefined>(undefined);

// Componente de provedor de tema
export const ThemeProvider: FC<{ theme: Theme; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  
  // Determine qual arquivo de variáveis CSS importar com base no tipo de tema
  // if (theme.type === 'dark') {
  //   // Importe as variáveis CSS escuras
  //   import('../build/css/_variables-dark.css');
  // } else if (theme.type === 'light'){
  //   // Importe as variáveis CSS padrão
  import('../build/css/_variables.css');
  // }

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
