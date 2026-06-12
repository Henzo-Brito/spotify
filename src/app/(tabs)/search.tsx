import styles from "@/constants/styles.constant";
import { StyleSheet, ScrollView, Text } from "react-native";
import SearchBar from "@/components/searchBar.component";
import MusicStyles from "@/components/musicStyles.component";
import { setMusicsStyles } from "@/db/setPlaylists";
import { MusicStyle } from "@/components/musicStyles.component";

import { useState, useEffect } from "react";


export default function Search(){
    const [styles, setStyles] = useState<MusicStyle[]>([]);

    useEffect(() => {
    async function load() {
        const result = await setMusicsStyles();
        setStyles(result);
    }

    load();
    }, []);
  return(<ScrollView style={style.container} showsVerticalScrollIndicator={false}>
    <SearchBar/>

    <Text style={style.text}>Navegar por todas as Seções</Text>

    <MusicStyles
        Playlists={styles}
    />
        
  </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: styles.color2
    },
    img:{
        width: 40,
        height: 40,
        borderRadius: 400
    },
    title:{
        fontSize: 20,
        color: styles.color5,
        fontWeight: 700
    },
    text:{
        fontSize: 18,
        color: styles.color5,
        fontWeight: 700,
        padding: 10
    }
})