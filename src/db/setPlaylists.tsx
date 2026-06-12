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

import { FastAverageColor } from "fast-average-color";
import { Asset } from "expo-asset";

const fac = new FastAverageColor();

const paletteCache = new Map<string, Promise<any>>();

async function getColorFromRequire(img: any) {
  const asset = Asset.fromModule(img);
  await asset.downloadAsync();

  const uri = asset.localUri ?? asset.uri;

  if (!uri) {
    throw new Error("Invalid asset URI");
  }

  return fac.getColorAsync(uri);
}

export async function setMusicsStyles() {
  const results = await Promise.all(
    tracks.map((track) => {
      if (paletteCache.has(track.img)) {
        return paletteCache.get(track.img)!;
      }

      const promise = (async () => {
        const color = await getColorFromRequire(track.img);

        return {
          Title: track.title,
          Color: color.hex,
          TitleColor: color.isDark ? "#fff" : "#000",
          Background: color.hex,
          Img: track.img,
        };
      })();

      paletteCache.set(track.img, promise);

      return promise;
    })
  );

  return results;
}