import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { color1 } from '~/constants/colors';
export const Header = () => {
  return <SafeAreaView style={styles.container}>
    <Image source={require('../constants/Logo-DaIdeia.png')} style={{width: 200, height: 200}}></Image>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '100%',
    backgroundColor: color1,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 30,
  },
});
