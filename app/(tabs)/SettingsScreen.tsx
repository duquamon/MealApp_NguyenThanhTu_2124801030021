// SettingsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Settings</Text>
      {/* Thêm các tùy chọn cài đặt tại đây */}
      <Button title="Change Theme" onPress={() => { /* Thay đổi giao diện hoặc cài đặt khác */ }} />
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
    marginBottom: 20,
  },
});

export default SettingsScreen;
