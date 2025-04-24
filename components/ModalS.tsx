import { Modal, FlatList, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { color2 } from "~/constants/colors";

export default function ModalS(props: { 
    isVisible: boolean; 
    onClose: () => void; 
    onClic: (title: string) => void; 
  }){
    
    const options = [
        {
            id: '1',
            nome: 'Saúde',
        },
        {
            id: '2',
            nome: 'Agronegócio'
        },
        {
            id: '3',
            nome: 'Construção Civil'
        },
        {
            id: '4',
            nome: 'Turismo'
        },
        {
            id: '5',
            nome: 'Indústria'
        },
        {
            id: '6',
            nome: 'Tecnologia da Informação'
        },
    ]
    type ItemProps = {title: string};
    const Item = ({title}: ItemProps) => (
        
        <TouchableOpacity style={styles.item} onPress={() => props.onClic(title)}><Text>{title}</Text></TouchableOpacity>
    )
    return(
        <Modal visible={props.isVisible} transparent={true} onRequestClose={props.onClose}>
            <View style={styles.modalBackground}>
                <View style={styles.modal}>
                    <FlatList data={options} renderItem={({item}) => <Item title={item.nome}/>} keyExtractor={item => item.id} style={{width: '100%'}}/>
                    <TouchableOpacity onPress={props.onClose} style={styles.botao}><Text>Fechar</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)', 
        justifyContent: 'center', 
        alignItems: 'center',     
      },
    modal:{
        width: 300,
        height: 300,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: color2,
        borderRadius: 20,
    },
    botao:{
        width: 80,
        height:30,
        padding: 5,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 1,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item:{
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: color2,
    }
})