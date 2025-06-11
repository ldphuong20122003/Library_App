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
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CategoryScreen = () => {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFocused) {
      fetchCategoryList();
    }
  }, [isFocused]);

  const fetchCategoryList = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/get-all-category");
      setCategoryList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const response = await api.delete(`/category/${id}`);
      if (response) {
        setCategoryList(categoryList.filter((item: any) => item.id !== id));
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Thể loại sách</Text>
      </View>
      <FlatList
        data={categoryList}
        renderItem={({ item }: { item: any }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddCategory", { type: "edit", data: item })
            }
          >
            <Row
              justifyContent="space-between"
              alignItems="center"
              style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
            >
              <View style={styles.viewItem}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Tên thể loại: {item.categoryName}
                </Text>
                <Text style={{ fontSize: 14 }}>Mô tả: {item.description}</Text>
                <Text style={{ fontSize: 14 }}>
                  Quốc gia: {item.nationality}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteCategory(item.id)}>
                <MaterialIcons name="delete-outline" size={24} color="black" />
              </TouchableOpacity>
            </Row>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddCategory", { type: "add", data: null })
        }
        style={styles.addButton}
      >
        <Ionicons name="add" size={20} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryScreen;

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
  viewItem: { flex: 1 },
});
