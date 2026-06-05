import styles from "@/constants/styles.constant";
import { StyleSheet, ScrollView, Text } from "react-native";

export default function Index(){
  return(<ScrollView style={style.container} showsVerticalScrollIndicator={false}>

  </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: styles.color2
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