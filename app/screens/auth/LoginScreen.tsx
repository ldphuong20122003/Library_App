import { AppButton, AppTextInput, Row } from "@/components";
import { appColor } from "@/constants/appColor";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const fadeAnim = useState(new Animated.Value(0))[0];

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.gradientContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Animated.View style={[{ opacity: fadeAnim }, styles.content]}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/images/logo.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          <View style={styles.formContainer}>
            <AppTextInput
              value={username}
              onChange={setUsername}
              placeHolder="Username"
              affix={
                <FontAwesome name="user" size={20} color={appColor.gray} />
              }
              viewStyles={styles.input}
            />
            <AppTextInput
              value={password}
              onChange={setPassword}
              placeHolder="Password"
              isPassword
              affix={
                <FontAwesome name="lock" size={20} color={appColor.gray} />
              }
              viewStyles={styles.input}
            />

            <Row
              justifyContent="space-between"
              alignItems="center"
              style={styles.rememberContainer}
            >
              <Row gap={8} alignItems="center">
                <Switch
                  value={isRemember}
                  onValueChange={setIsRemember}
                  trackColor={{ false: "#767577", true: appColor.primary }}
                  thumbColor={isRemember ? "white" : "#f4f3f4"}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </Row>
              <AppButton
                type="text"
                text="Forgot password?"
                onPress={() => {}}
                textStyles={styles.forgotPassword}
              />
            </Row>

            <AppButton
              type="primary"
              text="SIGN IN"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                });
              }}
              styles={styles.signInButton}
              textStyles={styles.signInButtonText}
            />
          </View>
        </Animated.View>

        <View style={styles.footer}>
          <Row gap={4} justifyContent="center">
            <Text style={styles.footerText}>Bạn chưa có tài khoản? </Text>
            <AppButton
              type="text"
              text="Đăng ký"
              onPress={() => {}}
              textStyles={styles.registerButton}
            />
          </Row>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    color: appColor.primary,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: appColor.primary,
    fontSize: 16,
    opacity: 0.8,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 20,
    width: width - 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  rememberContainer: {
    marginBottom: 20,
  },
  rememberText: {
    color: "#333",
    fontSize: 14,
  },
  forgotPassword: {
    color: "#4c669f",
    fontSize: 14,
    fontWeight: "600",
  },
  signInButton: {
    backgroundColor: "#4c669f",
    borderRadius: 10,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  footer: {
    paddingVertical: 20,
  },
  footerText: {
    color: appColor.primary,
    fontSize: 14,
  },
  registerButton: {
    color: appColor.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});
