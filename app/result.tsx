import { router } from "expo-router";
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, } from "react-native";
import { Header } from "~/components/Header";
import { color1 } from "~/constants/colors";

export default function Result(){
    return(
        <View style={styles.fundo}>
            <Header/>
            <TouchableOpacity onPress={() => router.back()} style={styles.voltar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        backgroundColor: 'white',
        height: "100%",
        width: "100%",
      },
      voltar:{
        borderWidth: 2,
        borderColor: color1,
        width: '30%',
        height: '10%',
      }
})