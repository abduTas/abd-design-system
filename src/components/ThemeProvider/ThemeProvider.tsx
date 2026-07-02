import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import './theme.css';

type Theme = 'light' | 'dark';

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProviderProps | undefined>(undefined);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  initialTheme?: Theme;
}> = ({ children, initialTheme = 'light' }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('abd-theme');
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider
      value={{
        children,
        initialTheme: initialTheme as Theme,
        toggleTheme: toggleTheme as () => void,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
