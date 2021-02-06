import ts from "rollup-plugin-typescript2";
import css from "rollup-plugin-css-only";
import importcss from "rollup-plugin-import-css";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import p from "./package.json";

export default {
  input: "./src/index.ts",
  output: {
    file: p.main,
    format: "cjs",
  },
  external: [...Object.keys(p.dependencies)],
  plugins: [
    css({ output: "bundle.css" }),
    commonjs(),
    importcss(),
    nodeResolve(),
    ts({ typescript: require("typescript"), tsconfig: "tsconfig.json" }),
  ],
};
