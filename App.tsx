import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppearanceProvider } from "react-native-appearance";
import Constants from "expo-constants";

import Home from "./src/components/Home";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: Constants.manifest.extra.graphqlURI,
});

const App = () => (
  <ApolloProvider client={client}>
    <AppearanceProvider>
      <Home />
    </AppearanceProvider>
  </ApolloProvider>
);

export default App;
