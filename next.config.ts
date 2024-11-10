/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/supermoist",
        destination: "/EurekaFarm/Hydatos/Super Moist",
        permanent: true,
      },
      {
        source: "/EurekaFarm",
        destination: "/EurekaFarm/Hydatos/Super Moist",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
