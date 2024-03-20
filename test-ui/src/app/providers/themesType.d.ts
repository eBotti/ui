import { ReactNode } from "react";

interface Colors {
    [key: string]: string;
}

interface Theme {
    background: Colors;
    text: Colors;
    button: Colors;
    block: Colors;
}

interface Themes {
    light: Theme;
    dark: Theme;
}

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    themes?: Themes;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export type { Theme, Themes, ThemeContextType, ThemeProviderProps};