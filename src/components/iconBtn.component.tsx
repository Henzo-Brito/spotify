import { TouchableOpacity, StyleSheet} from "react-native";
import {LucideIcon} from "lucide-react-native"
import styles from "@/constants/styles.constant";

type Props = {
    icon: LucideIcon,
    func: () => void
}

export default function IconBtn({icon:Icon, func}:Props){
    return (<TouchableOpacity onPress={func}>
        <Icon color={styles.color5} strokeWidth={3}/>
    </TouchableOpacity>)
}
