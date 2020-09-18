import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Share,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useQuery, gql } from "@apollo/client";
import { useColorScheme } from "react-native-appearance";
import { Ionicons } from "@expo/vector-icons";

import { haiku } from "types/haiku";
import { defaultStyles, lightStyles, darkStyles } from "./styles";

export const HAIKU_QUERY = gql`
  query haiku {
    haiku {
      topVerse
      middleVerse
      bottomVerse
    }
  }
`;

const Home = () => {
  const [loaded] = useFonts({
    UnifrakturMaguntia: require("../../assets/fonts/UnifrakturMaguntia-Regular.ttf"),
  });

  const colorScheme = useColorScheme();

  const { loading, data, refetch } = useQuery<haiku>(HAIKU_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  const onGenHaiku = () => refetch();

  const onShare = async () => {
    try {
      await Share.share({
        message: `${data?.haiku?.topVerse}\
        ${data?.haiku?.middleVerse}\
        ${data?.haiku?.bottomVerse}`,
      });
    } catch (error) {}
  };

  const getThemeStyles = (): typeof lightStyles | typeof darkStyles =>
    colorScheme === "light" || colorScheme === "no-preference"
      ? lightStyles
      : darkStyles;

  if (!loaded) return null;

  return (
    <View style={getThemeStyles().container}>
      <StatusBar
        style={
          colorScheme === "light" || colorScheme === "no-preference"
            ? "dark"
            : "light"
        }
      />
      {loading && (
        <View style={defaultStyles.loadingContainer}>
          <ActivityIndicator
            color={
              colorScheme === "light" || colorScheme === "no-preference"
                ? "black"
                : "white"
            }
          />
        </View>
      )}
      <Text style={getThemeStyles().title}>Haikus p'ra Vida</Text>
      <View style={defaultStyles.textContainer}>
        {data?.haiku && (
          <>
            <Text style={getThemeStyles().text}>{data.haiku.topVerse}</Text>
            <Text style={getThemeStyles().text}>{data.haiku.middleVerse}</Text>
            <Text style={getThemeStyles().text}>{data.haiku.bottomVerse}</Text>
            <View style={defaultStyles.shareContainer}>
              <TouchableOpacity
                style={getThemeStyles().shareBtn}
                onPress={onShare}
              >
                <Ionicons
                  name="md-share"
                  size={24}
                  color={
                    colorScheme === "light" || colorScheme === "no-preference"
                      ? "black"
                      : "white"
                  }
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      <TouchableOpacity
        style={getThemeStyles().button}
        onPress={onGenHaiku}
        disabled={loading}
      >
        <Text style={getThemeStyles().buttonText}>Demonimiza</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
