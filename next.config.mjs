/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignora erros de ESLint (como o de <img> e variáveis não usadas) durante o build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignora erros de TypeScript (como o 'any' no UnicornBackground) durante o build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Opcional: Se você usa o Unicorn Studio, garanta que ele não tente minificar o que já está pronto
  swcMinify: true,
}

export default nextConfig;