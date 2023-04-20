import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PhotoCaptureProps {
  theme: any;
}

const PhotoCapture = ({ theme }: PhotoCaptureProps) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    requestPermission();
  }

  if (!permission?.granted) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <Camera type={CameraType.back} style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PhotoCapture;
