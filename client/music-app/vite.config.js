import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       // proxy requests to the server
//       "/api": {
//         target: "http://localhost:3000",
//         secure: false,
//       },
//     },
//     watch: {
//       usePolling: true,
//     },
//   },
// })
