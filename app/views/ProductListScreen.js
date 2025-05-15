import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useProducts } from '../viewmodels/ProductViewModel';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const NUM_COLUMNS = 3;
const CARD_WIDTH = (width - CARD_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;
const CARD_HEIGHT = 240;

export default function ProductListScreen({ navigation }) {
  const { products, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Camera')}
        style={styles.cameraButton}
      >
        <Text style={styles.buttonText}>📷 Open Camera</Text>
      </Pressable>

      <Text style={styles.heading}>🛍️ Featured Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            style={styles.card}
            activeOpacity={0.85}
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.cardBody}>
              <Text numberOfLines={3} style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f6fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2c3e50',
  },
  cameraButton: {
    backgroundColor: '#0a8f08',
    marginHorizontal: 20,
    marginBottom: 15,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  flatListContainer: {
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: CARD_MARGIN / 2,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2c3e50',
    lineHeight: 16,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0a8f08',
    marginTop: 4,
  },
  errorText: {
    padding: 20,
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
