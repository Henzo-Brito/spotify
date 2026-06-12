import styles from "@/constants/styles.constant";
import Recent from "@/components/recent.component";
import { StyleSheet, ScrollView, Text } from "react-native";
import Section from "@/components/Section.component";
import { SetAlbums, setPlaylist, setRecentsPlaylist } from "@/db/setPlaylists";

export default function Index(){
  return(<ScrollView style={style.container} showsVerticalScrollIndicator={false}>

    <Recent Playlists={setRecentsPlaylist()}/>
    
    <Section title="Artistas que você curte">
        {SetAlbums(0, 5, 155)}
    </Section>
    <Section title="Álbuns com as músicas que você adora">
        {SetAlbums(6, 10, 155)}
    </Section>

    <Section title="Recentes" btn={
        <Text style={{color: styles.color6}}>
            Mostrar Tudo
        </Text>}>
        {SetAlbums(10, 15, 100)}
    </Section>
    <Section title="Seus Mixes Mais ouvidos">
        {setPlaylist(0, 1, 155)}
    </Section>
    <Section title="Suas músicas estão com saudade">
        {SetAlbums(16, 21, 155)}
    </Section>

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
        borderRadius: "50%"
    },
    title:{
        fontSize: 20,
        color: styles.color5,
        fontWeight: 700
    }
})