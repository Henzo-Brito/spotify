import styles from "@/constants/styles.constant";
import { View, Image, Text, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    img: ImageSourcePropType
    text: string
}

export default function MiniUser({img, text}: Props){
    return(<View style={style.container}>
        <Image style={style.img} source={img} />
        <Text style={style.name}>{text}</Text>
    </View>)
}

const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    img:{
        width: 35,
        height: 35,
        borderRadius: 40
    },
    name:{
        fontSize: 18,
        fontWeight: 500,
        color: styles.color6
    }
})


