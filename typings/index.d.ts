declare module '*.st.css' {
    const stylesheet: import('@stylable/runtime').RuntimeStylesheet;
    export = stylesheet;
}

declare module '*.jpg' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.png' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.gif' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.svg' {
    const urlToFile: string;
    export default urlToFile;
}

type LanguageConfiguration = import('monaco-editor-core').languages.LanguageConfiguration;
type IMonarchLanguage = import('monaco-editor-core').languages.IMonarchLanguage;

declare module 'monaco-languages/release/esm/scss/scss' {
    export const conf: LanguageConfiguration;
    export const language: IMonarchLanguage;
}

declare module 'monaco-languages/release/esm/javascript/javascript' {
    export const conf: LanguageConfiguration;
    export const language: IMonarchLanguage;
}

declare module 'monaco-languages/release/esm/css/css' {
    export const conf: LanguageConfiguration;
    export const language: IMonarchLanguage;
}

declare module 'monaco-languages/release/esm/typescript/typescript' {
    export const conf: LanguageConfiguration;
    export const language: IMonarchLanguage;
}
declare module 'monaco-json/release/esm/tokenization' {
    export const createTokenizationSupport: (flag: boolean) => import('monaco-editor-core').languages.TokensProvider;
}

declare namespace Chai {
    export interface Assertion {
        mostlyEqual(expected: unknown): void;
    }
}

declare module 'tailwindcss/lib/lib/expandApplyAtRules.js' {
    export default function expandApplyAtRules(): void;
}

declare module 'tailwindcss/lib/lib/generateRules.js' {
    export function generateRules(): void;
}

declare module 'tailwindcss/lib/lib/setupContextUtils.js' {
    import { Variant } from 'tailwindcss-language-service';
    import { Config } from 'tailwindcss';

    interface ChangedContent {
        content: string;
        extension?: string;
    }

    export interface JitContext {
        changedContent: ChangedContent[];
        getClassList: () => string[];
        getVariants: () => Variant[] | undefined;
        tailwindConfig: Config;
    }

    export function createContext(config: Config, changedContent?: ChangedContent[]): JitContext;
}

declare module 'prettier-plugin-tailwindcss';
