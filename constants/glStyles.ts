import { StyleSheet } from "react-native";
import { appColor } from "./appColor";

export const glStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "green",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    color: appColor.text,
    fontSize: 14,
  },
  border_view: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#E4DFDF",
  },
  button: {
    flexDirection: "row",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    backgroundColor: appColor.white,
  },
  shadow_color: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
});
