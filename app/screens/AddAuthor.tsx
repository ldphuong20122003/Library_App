import { api } from "@/api/api";
import { AppButton, AppTextInput, Container, Header } from "@/components";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AddAuthor = ({ route }: { route: any }) => {
  const { type, data } = route.params;
  const navigation: any = useNavigation();
  const [authorName, setAuthorName] = useState(data?.fullName || "");
  const [birthDay, setBirthDay] = useState(data?.birthDay || "");
  const [deathDay, setDeathDay] = useState(data?.deathDay || "");
  const [nationality, setNationality] = useState(data?.nationality || "");
  const addAuthor = async () => {
    try {
      const response = await api.post("/author", {
        id: data?.id,
        fullName: authorName,
        birthDay,
        deathDay,
        nationality,
      });
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
        title={type === "add" ? "Thêm tác giả" : "Cập nhật tác giả"}
        onBack={() => navigation.goBack()}
      />
      <View style={{ flex: 1, padding: 10, gap: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Thông tin tác giả
        </Text>
        <AppTextInput
          placeHolder="Tên tác giả"
          value={authorName}
          onChange={setAuthorName}
        />
        <AppTextInput
          placeHolder="Ngày sinh"
          value={birthDay}
          onChange={setBirthDay}
        />
        <AppTextInput
          placeHolder="Ngày mất"
          value={deathDay}
          onChange={setDeathDay}
        />
        <AppTextInput
          placeHolder="Quốc tịch"
          value={nationality}
          onChange={setNationality}
        />
        <AppButton
          text={type === "add" ? "Thêm" : "Cập nhật"}
          onPress={addAuthor}
          type="primary"
        />
      </View>
    </Container>
  );
};

export default AddAuthor;

const styles = StyleSheet.create({});
