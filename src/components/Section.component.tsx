import styles from "@/constants/styles.constant"
import { ScrollView, View , StyleSheet, Text} from "react-native" 

type Props = {
    children: React.ReactNode
    title?: string,
    btn?: React.JSX.Element
}

export default function Section({title="New Section", children, btn}: Props){
    return(<View>
        <View style={style.topper}>
            <Text style={style.title} numberOfLines={1}>{title}</Text>
            {btn}
        </View>

        <ScrollView
         horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.childrens}
         style={style.childrens}>
            {children}
        </ScrollView>

    </View>)
}

const style = StyleSheet.create({
    title:{
        color: styles.color5,
        fontSize: 17,
        flex: 1,
        overflow: "hidden",
        fontWeight: 700
    },
    childrens:{
        flexDirection: "row",
        padding: 5
    },
    topper:{
        flexDirection: "row",
        alignItems: "center",
        paddingInline: 10,
        paddingTop: 10,
    }
})

