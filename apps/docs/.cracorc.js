const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "docs",
          filename: "remoteEntry.js",
          remotes: {
            web: "web@http://localhost:3000/remoteEntry.js",
          },
          exposes: {
            "./CheckList": "./src/components/Checklist",
          },
          shared: {
            ...deps,
            // card: {
            //   singleton: true,
            // },
            "store": {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});
