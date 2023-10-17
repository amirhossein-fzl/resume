import { mergeConfig, defineConfig } from "vitest/config"
import vireConfig from "./vite.config";

export default mergeConfig(vireConfig, defineConfig({
    test: {
        globals: true,
        environment: "happy-dom",
    }
}));

