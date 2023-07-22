import React from "react";
import { View } from "react-native";

export default function FlexDemo() {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
    >
      <View style={{ height: 65, width: 65, backgroundColor: "green" }} />
      <View style={{ height: 65, width: 65, backgroundColor: "skyblue" }} />
      <View style={{ height: 65, width: 65, backgroundColor: "blue" }} />
    </View>
  );
}
