import IconBtn from "../iconBtn.component";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, StyleProp, ViewStyle, TextInput } from "react-native";
import styles from "@/constants/styles.constant";

type Props={
    placeholder?: string
    color?: string 
    sty?: StyleProp<ViewStyle>
}

export default function SearchBarHeader({placeholder = "O que você quer Ouvir?", color="transparent", sty}:Props){
    return(
        <SafeAreaView edges={["top"]} style={[style.container, {backgroundColor: color}, sty]}>
            <IconBtn icon={ArrowLeft} func={()=>{
                        if (!router.canGoBack()){
                            return router.push("/(tabs)")
                        }
                        return router.back() 
                    }
                }></IconBtn>
            <TextInput placeholder={placeholder} placeholderTextColor={styles.color6} style={style.input}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        gap: 10,
        width: "100%",
        marginTop: -1
    },
    input:{
        color: styles.color5,
        fontSize: 18,
        fontWeight: 500,
        flex: 1
    }
})
