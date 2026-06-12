import { StyleSheet, View, Text } from "react-native";
import IconBtn from "../iconBtn.component";
import { SafeAreaView } from "react-native-safe-area-context";
import {ChevronDown, EllipsisVertical} from "lucide-react-native" 
import { router } from "expo-router";
import styles from "@/constants/styles.constant";

type Props = {
    Title?: string
    Subtitle?: string
}

export default function Header({Title="",Subtitle=""}:Props){
    return(<SafeAreaView edges={["top"]} style={style.Container} >
        <IconBtn 
            icon={ChevronDown}
            func={()=>{router.canGoBack()
                ? router.back()
                : router.push("/")
            }}
            size={30}
            strokeWidth={1.5}
        />
        <View>
            <Text numberOfLines={1} style={[style.Text, {color: styles.color6, fontSize: 12}]}>{Subtitle}</Text>
            <Text numberOfLines={1} style={style.Text}>{Title}</Text>
        </View>

        <IconBtn 
            icon={EllipsisVertical}
            func={()=>{}}
            size={25}
            strokeWidth={1.5}
        />
    </SafeAreaView>)
}

const style = StyleSheet.create({
    Container:{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        fontSize: 14,
        justifyContent: "space-between",
        padding: 20,
    },
    Text:{
        color: styles.color5,
        width: "100%",
        fontSize: 14,
        textAlign: "center",
        overflow: "hidden",
    }
})

