import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import styles from '@/constants/styles.constant';

import SearchBarHeader from '@/components/search/searchBarHeader.component';
import MiniUser from '@/components/miniUser';
import Player from '@/components/playlist/player.component';
import Musics from '@/components/playlist/musics.component';

import { LinearGradient } from "expo-linear-gradient";


export default function Playlist() {
  return (
    <View style={style.container} >

      <SearchBarHeader />
      
      <ScrollView contentContainerStyle={style.scrollContent}>
        
        <View style={style.topper}>
          <LinearGradient
            colors={['transparent', styles.color3]}
            style={[
              StyleSheet.absoluteFillObject,
            ]}
          />
          <View style={style.imageContainer}>
            <Image 
              style={style.img} 
              source={require('@img/1.jpg')} 
            />
          </View>

          <Text style={style.title} numberOfLines={1}>TASDFVJANWSECVBASJDNCVGAWSEYHSXMDJCVNAWFGSCN SAXBVCNAWSNGEFDWXSJCSGV</Text>

          <MiniUser text="Henzo Brito" img={require("@img/1.jpg")}/>
          
          <Player />
        </View>
          <Musics></Musics>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: styles.color4,
    height: "100%"
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10
  },
  img: {
    borderRadius: 15,
    width: 270,
    height: 270,
  },
  title:{
    color: styles.color5,
    fontSize: 25,
    fontWeight: 700,
    overflow: "hidden",
    width: "100%",
    padding: 15
  },
  topper:{
    position: "relative",
    overflow: "hidden",
  },
});
