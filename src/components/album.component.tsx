import styles from "@/constants/styles.constant";
import { ImageSourcePropType, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { router } from "expo-router"

type Props ={
    Img: ImageSourcePropType
    Title?: string,
    Subtitle?: string,
    Size?: number,
    TitleLines?: number,
    BorderRadius?: number,
    Id?: number
}

export default function Album({Img, Title, Subtitle, TitleLines=2, Size=155, BorderRadius=5, Id=1}:Props){
    function drawSub(){
        if (Subtitle){
            return(
                <Text style={[style.text, style.sub]} numberOfLines={1}>{Subtitle ?? ""}</Text>
            )
        }
    }
    
    return (<TouchableOpacity onPress={()=>{router.push(`/music/${Id}` as any)}} style={[style.container, {width: Size}]}>
        <Image source={Img} style={{width: Size,height: Size, borderRadius: BorderRadius}}/>
        <Text style={style.text} numberOfLines={TitleLines}>{Title ?? ""}</Text>
        {drawSub()}
    </TouchableOpacity>)
}

const style = StyleSheet.create({
    container: {
        paddingRight: 10,
        gap: 2,
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


