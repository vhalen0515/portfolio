import { visualizer } from 'rollup-plugin-visualizer';

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), tailwindcss(), svgr(), visualizer({ open: true })],
});
