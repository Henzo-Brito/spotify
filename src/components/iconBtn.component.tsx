import { TouchableOpacity} from "react-native";
import {LucideIcon} from "lucide-react-native"
import styles from "@/constants/styles.constant";

type Props = {
    icon: LucideIcon,
    func: () => void,
    size?: number,
    strokeWidth?: number,
    rotate?: number
}

export default function IconBtn({icon:Icon, func, size=25, strokeWidth=3, rotate=0}:Props){
    return (<TouchableOpacity onPress={func} style={{transform: [{ rotate: `${rotate}deg` }]}}>
        <Icon color={styles.color5} strokeWidth={strokeWidth} size={size}/>
    </TouchableOpacity>)
}
