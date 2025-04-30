import { router } from "expo-router";
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, } from "react-native";
import { Header } from "~/components/Header";
import { color1 } from "~/constants/colors";

export default function Result(){
    return(
        <View style={styles.fundo}>
            <Header/>
            <Text>Nome do projeto: </Text>
            <View style={styles.titulobox}>
                <Text>Titulo do projeto</Text>
            </View>
            <Text>Descrição:</Text>
            <View style={styles.descbox}>
                <Text>Titulo do projetoTitulo do projeto</Text>
            </View>
            <TouchableOpacity onPress={() => router.back()} style={styles.voltar}>
            <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        backgroundColor: 'white',
        height: "100%",
        width: "100%",
        alignItems: "center",
        gap: 10,
      },
      voltar:{
        borderWidth: 2,
        borderColor: color1,
        width: '30%',
        height: '5%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
      },
      titulobox:{
        backgroundColor: 'lightgray',
        width: '90%',
        borderRadius: 20,
        padding: 10,
      },
      descbox:{
        backgroundColor: 'lightgray',
        width: '90%',
        borderRadius: 20,
        padding: 10,
      }
})