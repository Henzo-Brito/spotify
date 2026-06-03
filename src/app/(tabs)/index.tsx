import { View, StyleSheet } from "react-native";
import styles from "@/constants/styles.constant"
import Filter from "@/modules/filter.module";

export default function Index(){
  return(<View style={style.container}>
    <Filter filt={["Tudo","Música", "Podcasts"]}/>
  </View>)
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