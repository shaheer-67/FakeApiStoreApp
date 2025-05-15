import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const { width } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Image
          source={{ uri: product.image }}
          style={[styles.image, { width: width - 40, height: width - 40 }]}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.category}>{product.category}</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: '#f2f2f7',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10, // for Android shadow
  },
  image: {
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0a8f08', // greenish color
  },
  category: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
    fontStyle: 'italic',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});
