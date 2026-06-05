import styles from "@/constants/styles.constant";
import { View , StyleSheet} from "react-native";

export default function LineMusic(){
    return(<View style={style.line}>
        <View style={style.lineD}></View>
        <View style={style.circle}></View>
    </View>)
}

const style = StyleSheet.create({
    line:{
        backgroundColor: styles.color4,
        flexDirection: "row",
        marginTop: 30,
        width: "100%",
        borderRadius: 10,
        height: 5,
        alignItems: "center"
    },
    lineD:{
        borderRadius: 10,
        width: "30%",
        height: "100%",
        backgroundColor: styles.color1,
    },
    circle:{
        width: 14,
        height: 14,
        borderRadius: 10,
        backgroundColor: styles.color1,
        borderWidth: 3,
        borderColor: styles.color3,
    }
})
