import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import Header from "@/components/music/header.component";
import styles from "@/constants/styles.constant";
import { PlusCircle } from "lucide-react-native";
import IconBtn from "@/components/iconBtn.component";
import Player from "@/components/music/player.component";

import LineMusic from "@/components/music/lineMusic.component";

export default function Music(){
  const { id } = useLocalSearchParams();

  return(<ScrollView style={style.Container}>
      <Header 
        Title="Música do Henzo"
        Subtitle="Playlist do Henzo"
      />
      <View style={style.Image} >
        <Image style={style.img} source={require("@/assets/1.jpg")} />
      </View>



      <View style={style.desc}>
        <View style={style.info}>
          <Text style={style.title} numberOfLines={1}>asdfasdfas dfasdf asd Playlist do Henzo</Text>
          <Text style={style.subtitle} numberOfLines={1}>asdfasdfas dfasdf asd Henzo Brito dos Santos</Text>
        </View>
        <IconBtn 
          func={()=>{}}
          icon={PlusCircle}
          strokeWidth={2}
          size={30}
        />
      </View>
      
      <LineMusic></LineMusic>

      <Player/>

  </ScrollView>)
}

const style = StyleSheet.create({
  Container:{
      backgroundColor: styles.color3,
      padding: 20,
      flex: 1
  },
  Image:{
    width: "100%",
    height: undefined,
    aspectRatio: 1,
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
  },
  title:{
    color: styles.color5,
    fontWeight: 800,
    fontSize: 20,
    overflow: "hidden",
    width: "100%", 

  },
  subtitle:{
    color: styles.color6,
    overflow: "hidden",
    width: "100%", 
  },
  info:{
    width: "85%"
  }
})


