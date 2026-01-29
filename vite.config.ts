import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
	const isDev = mode !== "production";

	return {
		plugins: [
			react(),
			federation({
				remotes: isDev
					? {
							catalog_remote: "http://localhost:4173/assets/remoteEntry.js",
						}
					: {
							catalog_remote: "/prediction/assets/remoteEntry.js",
						},
				shared: ["react", "react-dom", '@tanstack/react-query'],
			}),
		],
	};
});
