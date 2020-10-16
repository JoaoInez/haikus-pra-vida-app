import "dotenv/config";

export default {
  expo: {
    name: "Haikus P'ra Vida",
    slug: "haikus-para-a-vida",
    version: "1.0.0",
    privacy: "public",
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
    android: {
      package: "com.demonimo.haikuspravida",
      versionCode: 1,
      config: {
        googleMobileAdsAppId: process.env.ADS_APP_ID,
      },
    },
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./src/assets/favicon.png",
    },
    extra: {
      graphqlURI: process.env.GRAPHQL_URI,
      adsUnitID: process.env.ADS_UNIT_ID,
      sentryDSN: process.env.SENTRY_DSN,
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "joao-inez",
            project: "haikus-pra-vida",
            authToken: process.env.SENTRY_AUTH_TOKEN,
          },
        },
      ],
    },
  },
};
