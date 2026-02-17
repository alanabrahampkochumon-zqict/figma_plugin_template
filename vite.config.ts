import react from "@vitejs/plugin-react";
import esbuild from "esbuild";
import { copyFile, glob } from "fs/promises";
import { resolve } from "path";
import { defineConfig, PluginOption } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

async function rebuildMain(): Promise<esbuild.BuildContext> {
    return esbuild.context({
        entryPoints: [resolve(__dirname, "src/common/main.ts")],
        bundle: true,
        platform: "node",
        target: "es2022",
        outfile: "dist/main.js",
        logLevel: "info",
    });
}

function watchManifest(): PluginOption {
    let rebuildCtx: esbuild.BuildContext;
    return {
        name: "watch-and-copy-manifest",
        async buildStart() {
            this.addWatchFile(resolve(__dirname, "manifest.json"));
            this.addWatchFile(resolve(__dirname, "index.html"));
            const files = glob("src/**/*.*");
            for await (const file of files) {
                this.addWatchFile(file);
            }
        },
        async writeBundle() {
            try {
                // Copy the manifest for plugin reload
                rebuildCtx = await rebuildMain();
                const tasks = [
                    rebuildCtx.rebuild(),
                    copyFile(
                        resolve(__dirname, "manifest.json"),
                        resolve(__dirname, "dist/manifest.json"),
                    ),
                ];
                await Promise.all(tasks);
                console.log(`Manifest copied successfully!`);
            } catch (err) {
                if (err instanceof Error)
                    console.log(
                        `There was an error copying the manifest file: ${err.message}`,
                    );
                else console.log(`There was an unknown error!`);
            }
        },
        async closeBundle() {
            rebuildCtx && rebuildCtx.dispose();
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
            watchManifest(),
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
        },
    };
});
