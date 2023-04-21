import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0f0f',
      alignItems: 'center',
    },
    camera: {
      borderRadius: 50,
      borderColor: '#08f',
      borderWidth: 2,
      overflow: 'hidden',
      marginTop: 50,
      width: 350,
      height: 450,
    },
    title: {
      color: '#fff',
      fontSize: 20,
    },
    description: {
      alignItems: 'center',
      padding: 10,
      height: 200,
    }
});