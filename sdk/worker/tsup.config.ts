import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["index.ts"],
	format: ["esm"],
	dts: true,
	clean: true,
	outDir: "dist",
	noExternal: ["@syi0808/lib", "@syi0808/http"],
});
