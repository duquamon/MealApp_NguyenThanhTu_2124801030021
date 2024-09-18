import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen'; // Đảm bảo đường dẫn đúng
import MealsOverviewScreen from './MealsOverviewScreen'; // Đảm bảo đường dẫn đúng
import { RootStackParamList } from '@/constants/types'; // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        {/* Thêm các màn hình khác nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
