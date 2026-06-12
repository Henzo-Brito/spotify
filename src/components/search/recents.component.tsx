import { View , Text, StyleSheet} from "react-native";

import styles from "@/constants/styles.constant";

import { getAllMusics } from "@/db/setPlaylists";

export default function Recents(){
    
    return(<View style={style.container}>
        <Text style={style.title}>Recentes</Text>
        {getAllMusics()}
    </View>)
}

const style = StyleSheet.create({
    container:{
        padding: 15
    },
    title:{
        color: styles.color5,
        fontSize: 18,
        fontWeight: 700,
        flex: 1
    }
})
