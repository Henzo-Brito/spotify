import styles from "@/constants/styles.constant";
import { ImageSourcePropType, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

type MusicStyle ={
    Img: ImageSourcePropType
    Title: string
    Color: string
    TitleColor: string
    Id?: number
}

type Props = {
    Playlists: MusicStyle[]
}

export default function MusicStyles({Playlists}:Props){
    function drawPlaylists(){
        return Playlists.map((playlist,i)=>{
            return (
                <TouchableOpacity key={i} onPress={()=>{
                    router.push(`/playlist/${playlist.Id ?? 1}` as any)
                }} style={[style.playlist, {backgroundColor: playlist.Color}]}>
                    <Image source={playlist.Img} style={style.img}/>
                    <Text style={[style.text, {color: playlist.TitleColor}]} numberOfLines={2}>{playlist.Title}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (<View style={style.container}>
        {drawPlaylists()}
    </View>)
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingInline: 10,
        width: "100%",
        maxWidth: 500,
        rowGap: 15,
    },
    playlist: {
        width: "48%",
        height: 80,
        borderRadius: 6,
        backgroundColor: styles.color2,
        overflow: "hidden",
        gap: 10
    },
    img: {
        width: 65,
        height: 65,
        borderRadius: 4,
        position: "absolute",
        right: -10,
        bottom:-5,
        transform: "rotate(20deg)"
    },
    text:{
        width: "100%",
        overflow: "hidden",
        padding: 7,
        fontWeight: 600,
        fontSize: 16
    }
});


