import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { glStyles } from "../constants/glStyles";

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isScrollable?: boolean;
}

const Container = ({
  children,
  isScrollable = false,
  style,
}: ContainerProps) => {
  return (
    <SafeAreaView
      style={[
        glStyles.container,
        { marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // điều chỉnh offset nếu có header
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          {isScrollable ? (
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              style={style}
            >
              {children}
            </ScrollView>
          ) : (
            <View style={[glStyles.container, style]}>{children}</View>
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;
