import react from "@vitejs/plugin-react";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

function build() {
    return {
        name: "build",
        async buildStart() {
            const manifest = await readFile(
                resolve(__dirname, "manifest.json"),
                "utf-8",
            );
            await writeFile(
                resolve(__dirname, "dist/manifest.json"),
                manifest,
                "utf-8",
            );
        },
    };
}

export default defineConfig(() => {
    return {
        plugins: [
            react(),
            viteSingleFile({
                useRecommendedBuildConfig: false,
                removeViteModuleLoader: true,
            }),
            build(),
        ],
        build: {
            target: "esnext",
            assetsInlineLimit: 100000000,
            chunkSizeWarningLimit: 100000000,
            cssCodeSplit: false,
            emptyOutDir: false,
            inlineDynamicImports: false,
            outDir: "dist",
            rollupOptions: {
                input: {
                    ui: resolve(__dirname, "index.html"),
                },
            },
            watch: {},
        },
    };
});
