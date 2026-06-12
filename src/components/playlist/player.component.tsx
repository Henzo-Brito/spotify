import { StyleSheet, View } from "react-native";
import IconBtn from "../iconBtn.component";
import { Shuffle, CirclePlus, EllipsisVertical, PlayCircle } from "lucide-react-native";

export default function Player(){
    return(<View style={style.container}>
        <View style={style.left}>
            <IconBtn func={()=>{}} icon={CirclePlus} strokeWidth={2.3}/>
            <IconBtn func={()=>{}} icon={EllipsisVertical} />
        </View>
        
        <View style={style.right}>
            <IconBtn func={()=>{}} icon={Shuffle} strokeWidth={2.3} />

            <IconBtn func={()=>{}} size={60} icon={PlayCircle} strokeWidth={1.2} />
        </View>
    </View>)
}

const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    right:{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingInline: 15
    },
    left:{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingInline: 15

    }
})
