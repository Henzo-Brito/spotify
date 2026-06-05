import styles from "@/constants/styles.constant";
import { ImageSourcePropType, StyleSheet, Image, Text, TouchableOpacity} from "react-native";

type Props ={
    Img: ImageSourcePropType
    Title?: string,
    Subtitle?: string,
    Size?: number,
    TitleLines?: number,
    BorderRadius?: number
}

export default function Album({Img, Title, Subtitle, TitleLines=2, Size=135, BorderRadius=5}:Props){
    return (<TouchableOpacity style={[style.container, {width: Size}]}>
        <Image source={Img} style={[style.img, {height: Size, borderRadius: BorderRadius}]}/>
        <Text style={style.text} numberOfLines={TitleLines}>{Title}</Text>
        <Text style={[style.text, style.sub]} numberOfLines={1}>{Subtitle}</Text>
    </TouchableOpacity>)
}

const style = StyleSheet.create({
    container: {
        paddingRight: 10,
        gap: 2
    },
    img: {
        width: "100%",
    },
    text:{
        color: styles.color5,
        width: "100%",
        overflow: "hidden",
    },
    sub:{
        color: styles.color6,
        fontSize: 12
    }
});


