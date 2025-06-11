import React, { FC, memo, ReactNode, useState } from "react";
import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { appColor } from "../constants/appColor";
import { glStyles } from "../constants/glStyles";
import Row from "./Row";

interface Props {
  value: string;
  onChange: (value: string) => void;
  affix?: ReactNode;
  placeHolder?: string | undefined;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  viewStyles?: ViewStyle;
  placeHolderTextColor?: string | undefined;
  type?: "email" | "password" | "username";
  keyboardType?: KeyboardType;
  onEnd?: () => void;
  error?: boolean;
  errorText?: string;
}

const AppTextInput: FC<Props> = ({
  value,
  onChange,
  affix,
  placeHolder,
  suffix,
  isPassword,
  allowClear,
  viewStyles,
  placeHolderTextColor,
  type,
  keyboardType,
  onEnd,
  error,
  errorText,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(isPassword ?? false);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleClear = () => {
    onChange("");
  };
  return (
    <View style={{ gap: 5, marginBottom: 16 }}>
      <View style={[{ ...styles.viewInput }, viewStyles]}>
        <Row justifyContent="space-between" alignItems="center">
          {affix && <View style={{ ...styles.viewAffix }}>{affix}</View>}
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder={placeHolder ?? ""}
              onChangeText={(val) => onChange(val)}
              secureTextEntry={isShowPassword}
              value={value}
              placeholderTextColor={placeHolderTextColor ?? appColor.gray}
              keyboardType={keyboardType ?? "default"}
              onEndEditing={onEnd}
            />
          </View>
          <View style={{ ...styles.viewSuffix }}>{suffix ?? suffix}</View>
          <TouchableOpacity
            onPress={isPassword ? handleShowPassword : handleClear}
            style={{ ...styles.viewSuffix }}
          >
            {isPassword ? (
              <View>
                <FontAwesomeIcon
                  name={isShowPassword ? "eye" : "eye-slash"}
                  size={22}
                  color={appColor.gray}
                />
              </View>
            ) : (
              value.length > 0 &&
              allowClear && (
                <AntDesign name="close" size={22} color={appColor.text} />
              )
            )}
          </TouchableOpacity>
        </Row>
      </View>
      {error && errorText && (
        <Text style={{ color: "red", marginLeft: 10 }}>{errorText}</Text>
      )}
    </View>
  );
};

export default memo(AppTextInput);

const styles = StyleSheet.create({
  viewInput: {
    ...glStyles.border_view,
    backgroundColor: appColor.white,
    minHeight: 56,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  viewAffix: {
    justifyContent: "center",
    marginRight: 4,
  },
  viewSuffix: {
    justifyContent: "center",
  },
});
