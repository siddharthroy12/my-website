import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL),
    "import.meta.env.SUPABASE_ANON_KEY": JSON.stringify(
      process.env.SUPABASE_ANON_KEY,
    ),
  },
});
