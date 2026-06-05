import { View } from "react-native";
import IconBtn from "../iconBtn.component";
import { Play, StepForward, Timer, Shuffle, PlayCircle } from "lucide-react-native";
import { StyleSheet } from "react-native";
import styles from "@/constants/styles.constant";

export default function Player(){
    return(
        <View style={style.Player}>
            <IconBtn 
                func={()=>{

                }}
                size={23}
                strokeWidth={2}
                icon={Shuffle}
            />
            
            <IconBtn 
                func={()=>{

                }}
                rotate={180}
                size={30}
                strokeWidth={2}
                icon={StepForward}
            />
           
            <IconBtn 
                func={()=>{
                    
                }}
                size={62}
                strokeWidth={1}
                icon={PlayCircle}
            />


            <IconBtn 
                func={()=>{

                }}
                size={30}
                strokeWidth={2}
                icon={StepForward}
            />

            <IconBtn 
                func={()=>{

                }}
                size={23}
                strokeWidth={2}
                icon={Timer}
            />
        </View>
    )
}

const style= StyleSheet.create({
    Player:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    }
})