import { StyleSheet, View } from "react-native";
import IconBtn from "../iconBtn.component";
import { Shuffle, CirclePlus, EllipsisVertical, PlayCircle, CircleCheck } from "lucide-react-native";

import { useMusic } from "@/contexts/music.context";
import { Play, Pause } from "lucide-react-native";

import { Track, TrackID } from "@/db/Playlists";
import styles from "@/constants/styles.constant";

type Props = {
  track: Track;
  playlist: Track[]
  playlistID: TrackID
};

export default function Player({track, playlist, playlistID}: Props){
    const {
    currentTrack,
    isPlaying,
    play,
    pause,
    resume,
    setPlaylist,
    } = useMusic();

    function setIcon() {
        const isCurrentTrack = currentTrack && playlist.some(t => t.id === currentTrack.id);

        return isCurrentTrack && isPlaying ? Pause : Play;
    }

    return(<View style={style.container}>
        <View style={style.left}>
            <IconBtn func={()=>{}} icon={EllipsisVertical} />
            <IconBtn func={()=>{}} icon={CircleCheck} color={styles.color1} strokeWidth={2.3}/>
        </View>
        
        <View style={style.right}>
            <IconBtn func={()=>{}} icon={Shuffle} strokeWidth={2.3} />
                <IconBtn
                    func={() => {
                        const isSamePlaylist = currentTrack && playlist.some(t => t.id === currentTrack.id);

                        if (!isSamePlaylist) {
                            setPlaylist(playlist);
                            play(track);
                            return;
                        }
                        if (isPlaying) {
                            pause();
                        } else {
                            setPlaylist(playlist);
                            resume();
                        }
                    }}
                    icon={setIcon()}
                    size={50}
                    strokeWidth={1.5}
                />
        </View>
    </View>)
}

const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    right:{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingInline: 15
    },
    left:{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingInline: 15

    }
})
