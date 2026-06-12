import { ScrollView, StyleSheet, View } from "react-native"

import SearchBarHeader from "@/components/search/searchBarHeader.component"
import styles from "@/constants/styles.constant"

import Recents from "@/components/search/recents.component"

export default function Search(){
    return(<ScrollView style={style.container} stickyHeaderIndices={[0]}>
        <SearchBarHeader color={styles.color4}/>
        <Recents />
    </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        backgroundColor: styles.color2
    },
})
