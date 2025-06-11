import { Container, Row } from "@/components";
import { appColor } from "@/constants/appColor";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthorScreen from "./AuthorScreen";
import BookScreen from "./BookScreen";
import CategoryScreen from "./CategoryScreen";

const TAB_LIST = {
  BOOK: "BOOK",
  CATEGORY: "CATEGORY",
  AUTHOR: "AUTHOR",
};
const HomeScreen = () => {
  const [tab, setTab] = useState(TAB_LIST.BOOK);
  const handleTab = (tab: string) => {
    setTab(tab);
  };
  const renderTab = () => {
    switch (tab) {
      case TAB_LIST.BOOK:
        return <BookScreen />;
      case TAB_LIST.CATEGORY:
        return <CategoryScreen />;
      case TAB_LIST.AUTHOR:
        return <AuthorScreen />;
    }
  };
  return (
    <Container>
      <Row justifyContent="space-around">
        {Object.values(TAB_LIST).map((item) => (
          <TouchableOpacity
            style={[
              styles.viewTab,
              {
                borderBottomColor:
                  tab === item ? appColor.primary : "transparent",
              },
            ]}
            key={item}
            onPress={() => handleTab(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </Row>
      {renderTab()}
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewTab: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
