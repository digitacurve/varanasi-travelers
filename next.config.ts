import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/kashi-darshan-tour-package", destination: "/packages/kashi-darshan", permanent: true },
      { source: "/kashi-ayodhya-tour-package", destination: "/packages/kashi-ayodhya", permanent: true },
      { source: "/kashi-prayagraj-ayodhya-tour-package", destination: "/packages/kashi-prayagraj-ayodhya", permanent: true },
      { source: "/prayagraj-darshan-tour-package", destination: "/packages/prayagraj-darshan", permanent: true },
      { source: "/chitrakoot-darshan-tour-package", destination: "/packages/chitrakoot-darshan", permanent: true },
      { source: "/kashi-chitrakoot-ayodhya-tour-package", destination: "/packages/kashi-chitrakoot-ayodhya", permanent: true },
      { source: "/uttar-pradesh-pilgrimage-tour-package", destination: "/packages/uttar-pradesh-pilgrimage", permanent: true },
      { source: "/divine-trails-uttar-pradesh-tour-package", destination: "/packages/divine-trails-uttar-pradesh", permanent: true },
      { source: "/mahakal-darshan-tour-package", destination: "/packages/mahakal-darshan", permanent: true },
      { source: "/mahakal-omkareshwar-tour-package", destination: "/packages/mahakal-omkareshwar", permanent: true },
      { source: "/ayodhya-darshan-tour-package", destination: "/packages/ayodhya-darshan", permanent: true },
    ];
  },
};

export default nextConfig;
