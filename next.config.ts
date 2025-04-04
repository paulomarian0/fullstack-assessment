import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.externals.push("@prisma/client");
		}
		return config;
	},
	output: "standalone",
};

export default nextConfig;
