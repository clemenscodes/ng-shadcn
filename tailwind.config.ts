import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
    presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
    content: [],
    darkMode: ['class'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                ['2xl']: '1400px',
            },
        },
        extend: {
            colors: {
                dimmed: {
                    ['font']: '#adbac7',
                    ['muted']: '#768390',
                    ['light']: '#f4f4f4',
                    ['100']: '#adbac7',
                    ['200']: '#909dab',
                    ['300']: '#768390',
                    ['400']: '#636e7b',
                    ['500']: '#545d68',
                    ['600']: '#444c56',
                    ['700']: '#373e47',
                    ['800']: '#2d333b',
                    ['900']: '#22272e',
                },
            },
            boxShadow: {
                ['full']: '0px 0px 8px 4px rgba(0,0,0,0.2)',
                ['full-xl']: '0px 0px 16px 8px rgba(0,0,0,0.2)',
            },
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
                condensed: ['Roboto Condensed'],
            },
        },
    },
} satisfies Config;

export default config;
