import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Garante que o Next usa esta pasta como raiz do projeto
     (existe outro package-lock.json fora do projeto). */
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
