import { Container, Header } from "@/components";
import { useNavigation } from "expo-router";
import React from "react";

const AddBook = () => {
  const navigation: any = useNavigation();
  return (
    <Container>
      <Header title="Thêm sách" onBack={() => navigation.goBack()} />
    </Container>
  );
};

export default AddBook;
