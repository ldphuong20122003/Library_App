import React, { FC, memo, ReactNode } from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { appColor } from "../constants/appColor";
import { glStyles } from "../constants/glStyles";
import Row from "./Row";

interface Props {
  icon?: ReactNode;
  text: string;
  type?: "primary" | "text" | "link";
  backgroundColor?: string;
  styles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: "right" | "left";
  disabled?: boolean;
}

const ButtonBase: FC<Props> = ({
  icon,
  text,
  type,
  backgroundColor,
  styles,
  textStyles,
  onPress,
  iconFlex,
  disabled,
}) => {
  return type === "primary" ? (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          {
            ...glStyles.button,
            ...glStyles.shadow_color,
            backgroundColor: backgroundColor
              ? backgroundColor
              : disabled
              ? appColor.gray4
              : "#0f9704",
            width: "80%",
          },
          styles,
        ]}
        onPress={onPress}
      >
        <Row justifyContent="center" alignItems="center">
          {icon && iconFlex == "left" && icon}
          <View style={{ flex: 1, ...glStyles.center }}>
            <Text
              style={[
                { color: "white", fontSize: 16, fontWeight: "600" },
                textStyles,
              ]}
            >
              {text}
            </Text>
          </View>
          {icon && iconFlex == "right" && icon}
        </Row>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <Text style={[{ color: "green" }, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonBase);
