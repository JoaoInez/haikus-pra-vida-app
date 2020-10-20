import { StyleSheet } from "react-native";

const fade = StyleSheet.create({
  default: {
    fontFamily: "UnifrakturMaguntia",
    fontSize: 40,
    textAlign: "center",
    position: "absolute",
  }
})

export const defaultStyles = StyleSheet.create({
  titleContainer: {
    position: "relative"
  },
  fade1: {
    ...fade.default,
    color: "#FF006E",
    zIndex: -1,
    top: 2,
    left: 2,
  },
  fade2: {
    ...fade.default,
    color: "#2A9D8F",
    zIndex: -2,
    top: 4,
    left: 4,
  },
  fade3: {
    ...fade.default,
    color: "#FFBE0B",
    zIndex: -3,
    top: 6,
    left: 6,
  },
  fade4: {
    ...fade.default,
    color: "#3A86FF",
    zIndex: -4,
    top: 8,
    left: 8,
  },
  fade5: {
    ...fade.default,
    color: "#8338EC",
    zIndex: -5,
    top: 10,
    left: 10,
  },
  textContainer: {
    alignItems: "flex-start",
    position: "relative",
  },
  shareContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  loadingContainer: {
    position: "absolute",
    top: 25,
    right: 25,
  },
});

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },
  title: {
    fontFamily: "UnifrakturMaguntia",
    fontSize: 40,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
  },
  shareBtn: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },
  title: {
    fontFamily: "UnifrakturMaguntia",
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  shareBtn: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
  },
});
