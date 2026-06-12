import { View, StyleSheet, Text } from "react-native";
import IconBtn from "@/components/iconBtn.component";
import { Play, Pause, StepForward } from "lucide-react-native";
import LineMusic from "@/components/music/lineMusic.component";
import { useMusic } from "@/contexts/music.context";

import { Track } from "@/db/Playlists";
import { router } from "expo-router";
import styles from "@/constants/styles.constant";
import { formatTime } from "@/tools/formatTime";

export default function PlayerPlayer({ track }: { track: Track }) {
  const { isPlaying, currentTrack, positionMillis, durationMillis, progress, play, pause, resume, next, prev } = useMusic();
  function setPlayIcon(){
    if (isPlaying && track.id === currentTrack?.id){ 
        return Pause
      } 
      return Play
    }

  function setDuration() {
    if (isPlaying && track.id === currentTrack?.id) {
      return [
        formatTime(positionMillis),
        formatTime(durationMillis),
      ];
    }

    return ["00:00", "00:00"];
  }

  return (
    <View>
        <View style={style.line}>
            <LineMusic id={track.id} progress={progress}/>
        </View>

        <Text style={style.progress}>{setDuration()[0]} / {setDuration()[1]}</Text>

        <View style={style.Player}>
                <IconBtn func={() => {
                  const track = prev();

                  if (track != null) {
                    router.push(`/music/${track.id}` as any);
                  }
                }} icon={StepForward}
                strokeWidth={2.2}
                 size={45} rotate={180} />

                <IconBtn
                  func={() => {
                    if (isPlaying) {
                        pause();
                    } else {
                        if (track.id === currentTrack?.id) {
                          resume();
                        } else {
                          play(track);
                        }
                    }
                }}
                icon={setPlayIcon()}
                strokeWidth={2.2}
                size={60}
                />
                <IconBtn func={() => {
                  const track = next();

                  if (track != null) {
                    router.push(`/music/${track.id}` as any);
                  }
                }}
                icon={StepForward} 
                strokeWidth={2.2}
                 size={45} />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  Player: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingInline: 20,
  },
  line:{
    paddingInline: 20
  },
  progress:{
    color: styles.color5,
    paddingInline: 20,
    paddingBlock: 10
  }
});