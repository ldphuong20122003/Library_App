import { api } from "@/api/api";
import { Row } from "@/components";
import { appColor } from "@/constants/appColor";
import { glStyles } from "@/constants/glStyles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
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

const AuthorScreen = () => {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const [authorList, setAuthorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAuthorList = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/get-all-author");
      setAuthorList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAuthor = async (id: string) => {
    try {
      const response = await api.delete(`/author/${id}`);
      if (response) {
        setAuthorList(authorList.filter((item: any) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchAuthorList();
    }
  }, [isFocused]);
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tác giả</Text>
      </View>
      <FlatList
        data={authorList}
        renderItem={({ item }: { item: any }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddAuthor", { type: "edit", data: item })
            }
          >
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={{ padding: 10, borderWidth: 1, borderRadius: 10, gap: 12 }}
            >
              <Image
                source={{
                  uri: "https://lh5.googleusercontent.com/proxy/2taOVwtl58FzMj1NYSuCz6VwoYs-qoAj1OZIKwdjvDAr_xRgftngRqpY4BBDYQ-PFpSulnrOjOMybRtX2Goi7ptySvDb1g-CV_h7BhEhF7JIU7M",
                }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Tên tác giả: {item.fullName}
                </Text>
                <Text style={{ fontSize: 14 }}>Ngày sinh: {item.birthDay}</Text>
                <Text style={{ fontSize: 14 }}>Ngày mất: {item.deathDay}</Text>
                <Text style={{ fontSize: 14 }}>
                  Quốc tịch: {item.nationality}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteAuthor(item.id)}>
                <MaterialIcons name="delete-outline" size={24} color="black" />
              </TouchableOpacity>
            </Row>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddAuthor", { type: "add", data: null })
        }
        style={styles.addButton}
      >
        <Ionicons name="add" size={20} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default AuthorScreen;

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
