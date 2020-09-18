import "dotenv/config";

export default {
  expo: {
    name: "haikus-para-a-vida",
    slug: "haikus-para-a-vida",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./src/assets/favicon.png",
    },
    extra: {
      graphqlURI: process.env.GRAPHQL_URI,
    },
  },
};
