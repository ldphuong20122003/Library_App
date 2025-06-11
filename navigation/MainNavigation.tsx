import AddAuthor from "@/app/screens/AddAuthor";
import AddBook from "@/app/screens/AddBook";
import AddCategory from "@/app/screens/AddCategory";
import HomeScreen from "@/app/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../app/screens/auth/LoginScreen";

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddAuthor" component={AddAuthor} />
      <Stack.Screen name="AddCategory" component={AddCategory} />
      <Stack.Screen name="AddBook" component={AddBook} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
