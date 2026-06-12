import React from "react";
import { Text, ImageSourcePropType, Image, View, TouchableOpacity, StyleSheet } from "react-native";

import styles from "@/constants/styles.constant";
import { router } from "expo-router";

type Props ={
    img: ImageSourcePropType,
    name?: string,
    authors?: string[],
    children?: React.ReactNode
    size?: number
    func: ()=>void
}

export default function MusicMini({img, name="Nome", authors=[""], func, children, size=57}:Props){
    function setTheAutors(){
        return authors.map((author, i)=>{
            if (authors.length-1 == i){
                return(author)
            }else{
                return(author + ", ")
            }
        })
    }

    const style = StyleSheet.create({
        container:{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingBlock: 5
        },
        title:{
            color: styles.color5,
            fontSize: 18,
            fontWeight: 700,
            width: "100%",
            overflow: "hidden",
        },
        description:{
            color: styles.color6,
            width: "100%",
            overflow: "hidden",
        },
        img:{
            borderRadius: 5,
            width: size,
            height: size
        },
        texts:{
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
            flex: 1,
            width: "85%",
        }
    })
    
    return(<TouchableOpacity style={style.container} onPress={func}>
        <Image style={style.img} source={img}/>

        <View style={style.texts}>
            <Text style={style.title} numberOfLines={1}>{name}</Text>
            <Text style={style.description} numberOfLines={1}>{setTheAutors()}</Text>
        </View>

        {children}
    </TouchableOpacity>)
}




