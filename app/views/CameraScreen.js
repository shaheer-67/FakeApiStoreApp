import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('back');
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to use the camera.</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.text}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const capturePhoto = async () => {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync({ quality: 0.7 });
      setPhotoUri(result.uri); // Save the photo URI
    }
  };

  const retakePhoto = () => {
    setPhotoUri(null);
  };

  const confirmPhoto = () => {
    // For now, just go back to the list screen
    navigation.goBack();
    // You can extend this to upload the photo or pass it to another screen
  };

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setFacing(f => (f === 'back' ? 'front' : 'back'))} style={styles.button}>
              <Text style={styles.text}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={capturePhoto} style={styles.button}>
              <Text style={styles.text}>Capture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={retakePhoto} style={styles.button}>
              <Text style={styles.text}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmPhoto} style={styles.button}>
              <Text style={styles.text}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  message: { textAlign: 'center', marginTop: 20 },
  camera: { flex: 1 },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#0a8f08',
    padding: 12,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  previewContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    resizeMode: 'contain',
  },
});
