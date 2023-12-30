import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import child_process from "child_process";

const commitHash = child_process
  .execSync("git rev-parse --short HEAD")
  .toString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.COMMIT_HASH": JSON.stringify(commitHash),
    "import.meta.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL),
    "import.meta.env.SUPABASE_ANON_KEY": JSON.stringify(
      process.env.SUPABASE_ANON_KEY,
    ),
  },
});
