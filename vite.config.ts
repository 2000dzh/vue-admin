import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
	plugins: [vue(), DefineOptions()],
	// 在文件中添加以下内容
	server: {
		port: 8080,
		host: "0.0.0.0"
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		}
	}
});
