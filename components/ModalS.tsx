import { Modal, FlatList, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { color2 } from "~/constants/colors";

export default function ModalS(props: any){

    return(
        <Modal visible={props.isVisible} transparent={true} >
            <View style={styles.modalBackground}>
                <View style={styles.modal}><TouchableOpacity onPress={() => props.onClose}></TouchableOpacity></View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        justifyContent: 'center', 
        alignItems: 'center',     
      },
    modal:{
        width: 300,
        height: 300,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: color2
    }
})