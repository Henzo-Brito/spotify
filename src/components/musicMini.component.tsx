import React from "react";
import { Text, ImageSourcePropType, Image, View, TouchableOpacity, StyleSheet } from "react-native";

import styles from "@/constants/styles.constant";

type Props ={
    img: ImageSourcePropType,
    name: string,
    authors?: string[],
    children?: React.ReactNode
    size?: number
}

export default function MusicMini({img, name, authors=[""], children, size=57}:Props){
    function setTheAutors(){
         
        return authors.map((author, i)=>{
            if (authors.length-1 == i){
                return(author)
            }else{
                return(author + ", ")
            }
        })
    }
    
    return(<TouchableOpacity style={style.container}>
        <Image style={style.img} width={size} source={img}/>

        <View style={style.texts}>
            <Text style={style.title} numberOfLines={1}>{name}</Text>
            <Text style={style.description} numberOfLines={1}>{setTheAutors()}</Text>
        </View>

        {children}
    </TouchableOpacity>)
}


const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
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
        aspectRatio: 1,
        borderRadius: 5
    },
    texts:{
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
        flex: 1
    }
})

