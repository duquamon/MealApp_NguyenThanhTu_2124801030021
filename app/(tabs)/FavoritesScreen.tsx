// FavoritesScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Your Favorite Meals</Text>
      {/* Bạn có thể thêm danh sách các món ăn yêu thích tại đây */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
