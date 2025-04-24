import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import { Header } from '~/components/Header';
import { color2 } from '~/constants/colors';
import  ModalS  from '~/components/ModalS'
import { useState } from 'react';

export default function Home() {
  const[visible, setVisible] = useState(false)
  const[area, setArea] = useState('Área de atuação')
  return (
      <View style={styles.fundo}>
        <Header/>
        <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
          <Text>{area}</Text>
          <Image source={require('constants/down.png')} style={{width: 10, height: 10, tintColor: color2}}/>
        </TouchableOpacity>
        <ModalS isVisible={visible} onClose={() => setVisible(false)} onClic={(title) => {setArea(title); setVisible(false)}}/>
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
      gap: '10%'
    },
    select:{
      width: '70%',
      height: '5%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: color2,
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
      flexDirection: 'row'
    }
  }
)