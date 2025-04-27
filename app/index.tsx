import { TouchableOpacity, View, StyleSheet, Text, Image, TextInput, Pressable, Keyboard } from 'react-native';
import { Header } from '~/components/Header';
import { color1 } from '~/constants/colors';
import  ModalS  from '~/components/ModalS'
import { useState } from 'react';
import { router } from 'expo-router';

export default function Home() {
  const[visible, setVisible] = useState<boolean>(false)
  const[area, setArea] = useState<string>('Área de atuação')
  const[stack, setStack] = useState<string>('')
  return (
      <Pressable style={styles.fundo} onPress={Keyboard.dismiss}>
        <Header/>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 45,}}> Gere a Ideia de Projeto</Text>
        <Text style={styles.label}>Selecione a Área de atuação: </Text>
        <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
          <Text style={{fontWeight: '100'}}>{area}</Text>
          <Image source={require('constants/down.png')} style={{width: 10, height: 10, tintColor: color1}}/>
        </TouchableOpacity>
        <ModalS isVisible={visible} onClose={() => setVisible(false)} onClic={(title) => {setArea(title); setVisible(false)}}/>
        <Text style={styles.label}>Digite as Stacks para o projeto: </Text>
        <TextInput
          editable
          multiline
          numberOfLines={3}
          maxLength={50}
          onChangeText={setStack}
          value={stack}
          placeholder="Digite as stacks aqui..."
          style={styles.input}
        />
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => router.navigate('./result')}><Text style={{color: 'white', fontWeight: 'bold'}}>Gerar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botaoR}><Text style={{color: 'white', fontWeight: 'bold'}}>Limpar</Text></TouchableOpacity>
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create(
  {
    fundo:{
      flex: 1,
      backgroundColor: 'white',
      height: "100%",
      width: "100%",
    },
    select:{
      width: '70%',
      height: '5%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: color1,
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      marginBottom: 20,
    },
    label:{
      fontSize: 14,
      fontWeight: '400',
      marginLeft: 63,
    },
    input:{
      borderWidth: 2,
      borderColor: color1,
      height: '10%',
      width: '70%',
      alignSelf: 'center',
      borderRadius: 10,
    },
    botao:{
      width: '40%',
      height: '100%',
      borderWidth: 2,
      borderColor: color1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: color1, 
    },
    botaoR:{
      width: '40%',
      height: '100%',
      borderWidth: 2,
      borderColor: 'red',
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    botoes:{
      alignItems: 'center',
      justifyContent:'space-between',
      flexDirection: 'row-reverse',
      width: '70%',
      height: '5%',
      alignSelf: 'center',
      marginTop: 40,
    }
  }
)