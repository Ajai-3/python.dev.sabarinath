import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform-site-url',
      enforce: 'post',
      transformIndexHtml(html) {
        // Automatically sanitize any double-slashes in URLs (e.g. https://domain.com//preview.jpg -> https://domain.com/preview.jpg)
        // while preserving the https:// protocol prefix.
        return html.replace(/([^:])\/\/+/g, '$1/');
      },
    },
  ],
});
