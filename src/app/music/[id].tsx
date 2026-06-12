import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import Header from "@/components/music/header.component";
import styles from "@/constants/styles.constant";
import { PlusCircle } from "lucide-react-native";
import IconBtn from "@/components/iconBtn.component";
import Player from "@/components/music/player.component";

import { LinearGradient } from "expo-linear-gradient";

import { MusicProvider } from "@/contexts/music.context";

export default function Music(){

  return(

  <ScrollView style={style.Container}>
      <Header 
        Title="Música do Henzo"
        Subtitle="Playlist do Henzo"
      />
      <View style={style.Image} >
        <Image style={style.img} source={require("@img/1.jpg")} />
      </View>

      <View style={style.desc}>
        <View style={style.info}>
          <Text style={style.title} numberOfLines={1}>asdfasdfas dfasdf asd Playlist do Henzo</Text>
          <Text style={style.subtitle} numberOfLines={1}>asdfasdfas dfasdf asd Henzo Brito dos Santos</Text>
        </View>
      </View>
      
      <Player track={{id: "1", source: require("@msc/1.m4a"), title:"Henzo", authors:["Henzo", "O melhor"]}}/>

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


