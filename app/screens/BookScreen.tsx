import { api } from "@/api/api";
import { Row } from "@/components";
import { appColor } from "@/constants/appColor";
import { glStyles } from "@/constants/glStyles";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BookScreen = () => {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFocused) {
      fetchBookList();
    }
  }, [isFocused]);

  const fetchBookList = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/get-all-book");
      setBookList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBook = async (id: string) => {
    try {
      const response = await api.delete(`/book/${id}`);
      if (response) {
        setBookList(bookList.filter((item: any) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={appColor.primary} />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sách</Text>
      </View>
      <FlatList
        data={bookList}
        renderItem={({ item }: { item: any }) => (
          <TouchableOpacity>
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={{ padding: 10, borderWidth: 1, borderRadius: 10, gap: 12 }}
            >
              <Image
                source={{
                  uri: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-book-icon-vector-image-png-image_8926794.png",
                }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Tên sách: {item.bookName}
                </Text>
                <Text style={{ fontSize: 14 }}>Mô tả: {item.description}</Text>
                <Text style={{ fontSize: 14 }}>Kệ: {item.location}</Text>
                <Text style={{ fontSize: 14 }}>Giá: {item.price} đ</Text>
              </View>
              <TouchableOpacity onPress={() => deleteBook(item.id)}>
                <MaterialIcons name="delete-outline" size={24} color="black" />
              </TouchableOpacity>
            </Row>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddBook", { type: "add", data: null })
        }
        style={styles.addButton}
      >
        <Ionicons name="add" size={20} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: appColor.primary,
    borderRadius: 100,
    ...glStyles.center,
    position: "absolute",
    right: 30,
    bottom: 30,
  },
});
