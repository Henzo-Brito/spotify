import { View , Text, StyleSheet} from "react-native";

import styles from "@/constants/styles.constant";
import MusicMini from "../musicMini.component";
import IconBtn from "../iconBtn.component";
import { X, EllipsisVertical} from "lucide-react-native";

export default function Recents(){
    
    return(<View style={style.container}>
        <Text style={style.title}>Recentes</Text>

        <MusicMini 
            img={require("@/assets/1.jpg")}  
            id={123}
            name="Henzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao" 
            authors={["Henzo", "Britasaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaop"]}    
        >
            <IconBtn icon={EllipsisVertical} func={()=>{}} strokeWidth={2}/>
            <IconBtn icon={X} func={()=>{}} strokeWidth={2} />
        </MusicMini>
<MusicMini 
            img={require("@/assets/1.jpg")}  
            id={123}
            name="Henzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao" 
            authors={["Henzo", "Britasaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaop"]}    
        >
            <IconBtn icon={EllipsisVertical} func={()=>{}} strokeWidth={2}/>
            <IconBtn icon={X} func={()=>{}} strokeWidth={2} />
        </MusicMini>
        <MusicMini 
            img={require("@/assets/1.jpg")}  
            id={123}
            name="Henzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao" 
            authors={["Henzo", "Britasaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaop"]}    
        >
            <IconBtn icon={EllipsisVertical} func={()=>{}} strokeWidth={2}/>
            <IconBtn icon={X} func={()=>{}} strokeWidth={2} />
        </MusicMini>
        <MusicMini 
            img={require("@/assets/1.jpg")}  
            id={123}
            name="Henzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao" 
            authors={["Henzo", "Britasaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaop"]}    
        >
            <IconBtn icon={EllipsisVertical} func={()=>{}} strokeWidth={2}/>
            <IconBtn icon={X} func={()=>{}} strokeWidth={2} />
        </MusicMini>
        <MusicMini 
            img={require("@/assets/1.jpg")}  
            id={123}
            name="Henzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao" 
            authors={["Henzo", "Britasaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaop"]}    
        >
            <IconBtn icon={EllipsisVertical} func={()=>{}} strokeWidth={2}/>
            <IconBtn icon={X} func={()=>{}} strokeWidth={2} />
        </MusicMini>
    </View>)
}

const style = StyleSheet.create({
    container:{
        gap: 10,
        padding: 15
    },
    title:{
        color: styles.color5,
        fontSize: 18,
        fontWeight: 700,
        flex: 1
    }
})
