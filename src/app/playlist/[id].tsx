import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import SearchBarHeader from '@/components/search/searchHeader.component';
import styles from '@/constants/styles.constant';

import MiniUser from '@/components/miniUser';

export default function Playlist() {
  return (
    <View style={style.container}>
      <SearchBarHeader />
      <ScrollView contentContainerStyle={style.scrollContent}>
        <View style={style.imageContainer}>
          <Image 
            style={style.img} 
            source={require('@/assets/1.jpg')} 
          />
        </View>

        <Text style={style.title} numberOfLines={1}>TASDFVJANWSECVBASJDNCVGAWSEYHSXMDJCVNAWFGSCN SAXBVCNAWSNGEFDWXSJCSGV</Text>

        <MiniUser text="Henzo Brito" img={require("@/assets/1.jpg")}/>
        
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: styles.color4,
  },
  scrollContent: {
    justifyContent: 'center',
    padding: 15
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
    width: "100%"
  }
});
