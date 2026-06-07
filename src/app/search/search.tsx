import { ScrollView, StyleSheet } from "react-native"

import SearchBarHeader from "@/components/search/searchHeacder.component"
import styles from "@/constants/styles.constant"

import Recents from "@/components/search/recents.component"

export default function Search(){
    return(<ScrollView style={style.container}>
        <SearchBarHeader/>

        <Recents>
            
        </Recents>

    </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        backgroundColor: styles.color2
    }
})
