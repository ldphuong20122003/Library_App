import { appColor } from "@/constants/appColor";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Row from "./Row";
interface HeaderProps {
  title: string;
  onBack?: () => void;
}
const Header = ({ title, onBack }: HeaderProps) => {
  return (
    <Row
      justifyContent="flex-start"
      alignItems="center"
      gap={10}
      style={styles.container}
    >
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
    </Row>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: appColor.gray,
  },
});
