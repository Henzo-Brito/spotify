import styles from "@/constants/styles.constant";
import { StyleSheet, ScrollView, Text } from "react-native";

import { setLibrary } from "@/db/setPlaylists";

export default function Index(){
  return(<ScrollView style={style.container} showsVerticalScrollIndicator={false}>
    {setLibrary()}
  </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: styles.color2,
        padding: 15,
        gap: 10
    },
    img:{
        width: 40,
        height: 40,
        borderRadius: "50%"
    },
    title:{
        fontSize: 20,
        color: styles.color5,
        fontWeight: 700
    }
})