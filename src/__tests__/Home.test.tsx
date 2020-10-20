import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import { AppearanceProvider } from "react-native-appearance";

import Home from "../components/Home";
import { defaultMocks } from "../__mocks__/apollo";

describe("<Home />", () => {
  jest.setTimeout(30000);

  it("matches snapshots", async () => {
    const tree = render(
      <MockedProvider mocks={defaultMocks} addTypename={false}>
        <AppearanceProvider>
          <Home />
        </AppearanceProvider>
      </MockedProvider>
    );

    expect(tree).toMatchSnapshot();

    await waitFor(() => {});

    expect(tree).toMatchSnapshot();
  });

  it("fetches haikus", async () => {
    const { getByText } = render(
      <MockedProvider mocks={defaultMocks} addTypename={false}>
        <AppearanceProvider>
          <Home />
        </AppearanceProvider>
      </MockedProvider>
    );

    await waitFor(() => {});

    expect(getByText("Testa-me a sanidade")).toBeTruthy();
    expect(getByText("Este lixo falha sempre")).toBeTruthy();
    expect(getByText("Quero desistir")).toBeTruthy();
  });
});
