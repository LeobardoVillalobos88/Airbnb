import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Avatar } from '@rneui/themed'; // Cambia a la librería correcta

export default function MockupInstagram(props) {
  const { backgroundColor = 'green', size1 = 64, size2 = 64, size3 = 64 } = props; // Props con valores predeterminados

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Avatar
        size={size1}
        title="LV"
        rounded
        containerStyle={styles.avatar}
      />
      <Avatar
        size={size2}
        title="LV"
        rounded
        containerStyle={styles.avatar}
      />
      <Avatar
        size={size3}
        title="LV"
        rounded
        containerStyle={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 8,
    padding: 8,
  },
  avatar: {
    marginHorizontal: 8,
  },
});
