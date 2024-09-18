// app/MenuScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/constants/types';

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const CATEGORIES = [
  { id: '1', title: 'Italian', image: { uri: 'https://reactjs.org/logo-og.png' } },
  // ... các mục khác
];

const MenuScreen = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  const renderCategoryItem = ({ item }: { item: { id: string, title: string, image: { uri: string } } }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        navigation.navigate('MealsOverview', {
          categoryId: item.id,
        });
      }}
    >
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
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

export default MenuScreen;
