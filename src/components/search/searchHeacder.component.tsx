import IconBtn from "../iconBtn.component";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TextInput } from "react-native";
import styles from "@/constants/styles.constant";

type Props={
    placeholder?: string
}

export default function SearchBarHeader({placeholder = "O que você quer Ouvir?"}:Props){
    return(
        <SafeAreaView edges={["top"]} style={style.container}>
            <IconBtn icon={ArrowLeft} func={()=>{router.push("/search")}}></IconBtn>
            <TextInput placeholder={placeholder} placeholderTextColor={styles.color6} style={style.input}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: styles.color4,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        gap: 10
    },
    input:{
        color: styles.color5,
        fontSize: 18,
        fontWeight: 500,
        flex: 1
    }
})
