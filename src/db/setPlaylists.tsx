import { playlists, TrackID, tracks, Track } from "./Playlists";

import MusicMini from "@/components/musicMini.component";
import IconBtn from "@/components/iconBtn.component";
import { EllipsisVertical } from "lucide-react-native";

import { router } from "expo-router";

export function setRecentsPlaylist(){
    let map = playlists.map((playlist)=>{
        return {
            img: playlist.img,
            name: playlist.name,
            id: playlist.id
        }
    })
    return map
}

export function setLibrary(){
    return playlists.map((playlist)=>{
        return (   
        <MusicMini 
            func={()=>{router.push(`/playlist/${playlist.id}` as any)}} 
            img={playlist.img} 
            name={playlist.name}
            key={playlist.id}
            size={65}
        >
            <IconBtn func={()=>{}} icon={EllipsisVertical}/>
        </MusicMini>)
    })
}

export function getTracksByPlaylistID(id: TrackID) {
  const playlist = playlists.find((playlist) => playlist.id === id);

  if (!playlist) return [];

  return playlist.tracks
    .map((trackID) => tracks.find((track) => track.id === trackID))
    .filter((track): track is Track => track !== undefined);
}

export function getPlaylistById(id: TrackID){
    return playlists.find((playlist)=> playlist.id == id) || playlists[0]
}

export function getMusicById(id: TrackID){
    return tracks.find((track)=> track.id == id) || tracks[0]
}

export function getAllMusics(){
    return tracks.map((track)=>{
        return (   
        <MusicMini 
            func={()=>{router.push(`/music/${track.id}` as any)}} 
            img={track.img} 
            name={track.title}
            size={55}
            key={track.id}
            authors={track.authors}
        >
            <IconBtn func={()=>{}} icon={EllipsisVertical}/>
        </MusicMini>)
    })
}

import Album from "@/components/album.component";
import styles from "@/constants/styles.constant";

export function SetAlbums(init: number, finish: number, size: number){
    const albums = []
    while(init <= finish){
        const track = tracks[init]

        albums.push(        
            <Album 
               Title={track.title}
               Subtitle={"Música - "+ track.authors[0]}
               Img={track.img}
               Size={size}
               TitleLines={1}
               key={track.id}
               func={()=>{router.push(`/music/${track.id}` as any)}}
            />
        )
        init++
    }
    return albums
}

export function setPlaylist(init: number, finish: number, size: number){
    const albums = []
    while(init <= finish){
        const track = playlists[init]

        albums.push(        
            <Album 
               Title={track.name}
               Subtitle={"Playlit do Henzo"}
               Img={track.img}
               key={track.id}
               Size={size}
               func={()=>{router.push(`/playlist/${track.id}` as any)}}
               TitleLines={1}
            />
        )
        init++
    }
    return albums
}

import { MusicStyle } from "@/components/musicStyles.component";

export function setMusicsStyles(){
    return tracks.map((track)=>{
        const Music: MusicStyle = {
          Title: track.title,
          TitleColor: styles.color5,
          Color: styles.color7,
          Img: track.img,
          Id: track.id
        }
        return Music
    })
}
