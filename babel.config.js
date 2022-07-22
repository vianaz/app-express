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
          "@controllers": "./src/controllers",
          "@db": "./src/db",
          "@errors": "./src/errors",
          "@routers": "./src/routers",
          "@factories": "./src/factories",
          "@middlewares": "./src/middlewares",
          "@schemas": "./src/models/schemas",
          "@types": "./src/models/types",
          "@repositories": "./src/repositories",
          "@services": "./src/services",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
