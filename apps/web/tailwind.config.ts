import type { Config } from 'tailwindcss';
import { join } from 'path';
import baseConfig from '../../tailwind.config';

const config = {
    extends: [baseConfig],
    content: [
        ...baseConfig.content,
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ],
} satisfies Config;

export default config;
