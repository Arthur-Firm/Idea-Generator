import { Text, View, StyleSheet } from 'react-native';
import { Header } from '~/components/Header';

export default function Home() {
  return (
      <View style={styles.fundo}>
        <Header/>
      </View>
  );
}

const styles = StyleSheet.create(
  {
    fundo:{
      flex: 1,
      backgroundColor: 'white',
      height: "100%",
      width: "100%",
    }
  }
)