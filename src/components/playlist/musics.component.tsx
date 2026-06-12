import styles from "@/constants/styles.constant"
import { View , StyleSheet, Text} from "react-native" 

import MusicMini from "../musicMini.component"
import IconBtn from "../iconBtn.component"

import { EllipsisVertical } from "lucide-react-native"

export default function Musics(){
    return(<View style={style.container}>
        <MusicMini id={1} img={require("@img/1.jpg")} name="Henzo" authors={["Henzo Brito"]}>
            <IconBtn func={()=>{}} icon={EllipsisVertical} />
        </MusicMini>
                <MusicMini id={1} img={require("@img/1.jpg")} name="Henzo" authors={["Henzo Brito"]}>
            <IconBtn func={()=>{}} icon={EllipsisVertical} />
        </MusicMini>

    </View>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        gap: 10,
        backgroundColor: styles.color3,
        marginTop: -1
    },
})

