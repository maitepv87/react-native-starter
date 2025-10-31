import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ImageScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ImageScreen;
