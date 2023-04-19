import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PhotoCapture = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    requestPermission();
  }

  if (!permission?.granted) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <Camera type={type} style={styles.container} />
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
