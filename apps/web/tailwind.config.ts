import type { Config } from 'tailwindcss';
import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { join } from 'path';
import baseConfig from '../../tailwind.config';

const config = {
    presets: [baseConfig],
    content: [
        join(
            __dirname,
            '../../libs/ui/**',
            'src/**/!(*.stories|*.spec).{ts,html}',
        ),
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
} satisfies Config;

export default config;
