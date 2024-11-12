import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/grain.tsx",
  output: {
    file: "src/grain-search.jsx",
    format: "esm",
  },
  external: ["react", "React"],
  plugins: [typescript(), commonjs(), nodeResolve({ modulesOnly: false, exportConditions: ["node"] })],
};
