import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../gesture-handler.js";
import "../global.css";
import MainNavigation from "../navigation/MainNavigation";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default RootLayout;
