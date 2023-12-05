import type { Config } from "tailwindcss";

import baseConfig from "@vintage/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
  ],
  presets: [baseConfig],
} satisfies Config;
