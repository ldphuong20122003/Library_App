import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface RowProps {
  children: React.ReactNode;
  gap?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  style?: StyleProp<ViewStyle>;
}

const Row = ({
  children,
  gap = 4,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  style,
}: RowProps) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          gap,
          justifyContent: justifyContent,
          alignItems: alignItems,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Row;
