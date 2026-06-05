import styles from "@/constants/styles.constant";
import { ImageSourcePropType, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

type Playlist ={
    Img: ImageSourcePropType
    Title: string
}

type Props = {
    Playlists: Playlist[]
}

export default function Recent({Playlists}:Props){
    function drawPlaylists(){
        return Playlists.map((playlist,i)=>{
            if(i <= 7){
                return (
                <TouchableOpacity key={i} style={style.playlist}>
                    <Image source={playlist.Img} style={style.img}/>
                    <Text style={style.text} numberOfLines={1}>{playlist.Title}</Text>
                </TouchableOpacity>)
            }
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
        width: "100%",
        padding: 10,
        maxWidth: 500,
        rowGap: 7
    },
    playlist: {
        flexDirection: "row",
        alignItems: "center",
        width: "49%",
        height: 45,
        borderRadius: 6,
        backgroundColor: styles.color4,
        gap: 10
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 4,
    },
    text:{
        color: styles.color5,
        width: "100%",
        overflow: "hidden",
    }
});


