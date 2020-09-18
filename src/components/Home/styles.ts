import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
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
    top: 20,
    right: 20,
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
