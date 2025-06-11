import { api } from "@/api/api";
import { AppButton, AppTextInput, Container, Header } from "@/components";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AddCategory = ({ route }: { route: any }) => {
  const { type, data } = route.params;
  const navigation: any = useNavigation();
  const [categoryName, setCategoryName] = useState(data?.categoryName || "");
  const [description, setDescription] = useState(data?.description || "");
  const [nationality, setNationality] = useState(data?.nationality || "");
  console.log(type, data);

  const addCategory = async () => {
    try {
      const response = await api.post("/category", {
        id: data?.id,
        categoryName,
        description,
        nationality,
      });
      console.log(response);

      if (response) {
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Header
        title={type === "add" ? "Thêm thể loại" : "Cập nhật thể loại"}
        onBack={() => navigation.goBack()}
      />
      <View style={{ flex: 1, padding: 10, gap: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Thông tin thể loại
        </Text>
        <AppTextInput
          placeHolder="Tên thể loại"
          value={categoryName}
          onChange={setCategoryName}
        />
        <AppTextInput
          placeHolder="Mô tả"
          value={description}
          onChange={setDescription}
        />
        <AppTextInput
          placeHolder="Quốc gia"
          value={nationality}
          onChange={setNationality}
        />
        <AppButton
          text={type === "add" ? "Thêm" : "Cập nhật"}
          onPress={addCategory}
          type="primary"
        />
      </View>
    </Container>
  );
};

export default AddCategory;

const styles = StyleSheet.create({});
