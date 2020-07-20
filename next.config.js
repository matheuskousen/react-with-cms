module.exports = {
  distDir: "build",
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "soundline";
  },
  target: "serverless",
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
};
