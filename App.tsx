import React from "react";
import { View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppearanceProvider } from "react-native-appearance";
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";
import Constants from "expo-constants";

import Home from "./src/components/Home";

__DEV__ &&
  (async () => {
    await setTestDeviceIDAsync("EMULATOR");
  })();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: Constants.manifest.extra.graphqlURI,
});

const App = () => (
  <ApolloProvider client={client}>
    <AppearanceProvider>
      <Home />
      <View style={{ display: "flex", alignItems: "center" }}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={Constants.manifest.extra.adsUnitID}
          servePersonalizedAds
        />
      </View>
    </AppearanceProvider>
  </ApolloProvider>
);

export default App;
