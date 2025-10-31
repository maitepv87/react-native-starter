import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.scoreTextStyle}>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  scoreTextStyle: {
    fontSize: 20,
  },
});

export default ImageDetail;
