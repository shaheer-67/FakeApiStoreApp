// import React, { useRef, useState, useEffect } from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import  nCamera  from 'expo-camera';

// export default function CameraScreen() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const cameraRef = useRef(null);
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setPhoto(photo.uri);
//     }
//   };

//   if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
//   if (hasPermission === false) return <Text>No access to camera</Text>;

//   return (
//     <View style={{ flex: 1 }}>
//       {!photo ? (
//         <>
//           <Camera style={{ flex: 1 }} ref={cameraRef} />
//           <Button title="Take Photo" onPress={takePicture} />
//         </>
//       ) : (
//         <View style={{ flex: 1 }}>
//           <Image source={{ uri: photo }} style={{ flex: 1 }} />
//           <Button title="Retake" onPress={() => setPhoto(null)} />
//           <Button title="Confirm" onPress={() => alert('Photo Confirmed')} />
//         </View>
//       )}
//     </View>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <Text>Requesting permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} />
    </View>
  );
}
