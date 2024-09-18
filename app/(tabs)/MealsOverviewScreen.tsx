// app/MealsOverviewScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types';

type MealsOverviewRouteProp = RouteProp<RootStackParamList, 'MealsOverview'>;

const MEALS = [
  { id: '1', title: 'Spaghetti', image: { uri: 'https://example.com/spaghetti.png' }, categoryId: '1' },
  { id: '2', title: 'Pizza', image: { uri: 'https://example.com/pizza.png' }, categoryId: '1' },
  // ... các món ăn khác
];

const MealsOverviewScreen = () => {
  const route = useRoute<MealsOverviewRouteProp>();
  const { categoryId } = route.params;

  // Lọc các món ăn theo categoryId
  const displayedMeals = MEALS.filter(meal => meal.categoryId === categoryId);

  const renderMealItem = ({ item }: { item: { id: string, title: string, image: { uri: string } } }) => (
    <TouchableOpacity style={styles.gridItem}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});

export default MealsOverviewScreen;
