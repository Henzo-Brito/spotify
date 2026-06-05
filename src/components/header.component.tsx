import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View, Image, ImageSourcePropType, StyleSheet , FlexAlignType} from "react-native";
import styles from "@/constants/styles.constant";

type Props = {
    title?: string
    img: ImageSourcePropType,
    children: React.ReactNode,
}

export function Header({title, img, children}:Props){
    return(<SafeAreaView style={[style.container]} edges={["top"]}>
        <View style={style.left}>
            <Image source={img} style={style.img}></Image>
            <Text style={style.title}>{title}</Text>
        </View>
        <View style={style.childrens}>{children}</View>
    </SafeAreaView>)
}

const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: styles.color2
    },
    img:{
        width: 33,
        height: 33,
        borderRadius: 500
    },
    title:{
        fontSize: 18,
        color: styles.color5,
        fontWeight: 700
    },
    childrens:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
        width: "30%"
    },
    left:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: "70%"
    }
})


