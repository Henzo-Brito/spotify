import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import Header from "@/components/music/header.component";
import styles from "@/constants/styles.constant";
import Player from "@/components/music/player.component";

import { LinearGradient } from "expo-linear-gradient";

import { useLocalSearchParams } from "expo-router";

import { TrackID } from "@/db/Playlists";
import { getMusicById } from "@/db/setPlaylists";

export default function Music(){
  const { id } = useLocalSearchParams<{ id: TrackID }>();

  const music = getMusicById(id)
    function setTheAutors(){
        let str = ""
        music.authors.map((author, i)=>{
            if (music.authors.length-1 == i){
                str += author
            }else{
                str += `author, `
            }
        })
        return str
    }
  return(

  <ScrollView style={style.Container}>
      <Header 
        Title={music.title}
        Subtitle={setTheAutors()}
      />
      <View style={style.Image} >
        <Image style={style.img} source={music.img} />
      </View>

      <View style={style.desc}>
        <View style={style.info}>
          <Text style={style.title} numberOfLines={1}>{music.title}</Text>
          <Text style={style.subtitle} numberOfLines={1}>{setTheAutors()}</Text>
        </View>
      </View>
      
      <Player track={music}/>

      <LinearGradient
        colors={[styles.color4, styles.color3]}
        style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            flex: 1,
            height: "100%",
            zIndex: -1
        }}
    />
  </ScrollView>)
}

const style = StyleSheet.create({
  Container:{
      backgroundColor: styles.color3,
      flex: 1
  },
  Image:{
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    padding: 20,
  },
  img:{
    width: "100%", 
    height: "100%",
    borderRadius: 10,
    maxWidth: 400,
    maxHeight: 400
  },
  desc:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingInline: 20,
  },
  title:{
    color: styles.color5,
    fontWeight: 800,
    fontSize: 24,
    overflow: "hidden",
    width: "100%", 
  },
  subtitle:{
    color: styles.color6,
    overflow: "hidden",
    width: "100%", 
    fontSize: 18
  },
  info:{
    width: "100%"
  },
})


