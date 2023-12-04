"use client";

import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {Provider} from "@radix-ui/react-tooltip";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface ThemeProviderPropsWithChildren extends ThemeProviderProps {
 children: ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderPropsWithChildren) {
 return (
   <NextThemesProvider {...props}>
     <Provider>{children}</Provider>
   </NextThemesProvider>
 );
}
