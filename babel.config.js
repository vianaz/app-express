module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@db": "./src/db",
          "@routers": "./src/routers",
          "@middlewares": "./src/middlewares",
          "@controllers": "./src/controllers",
          "@factories": "./src/factories",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@schemas": "./src/models",
          "@types": "./src/models",
          "@repositories": "./src/repositories",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
