import { View, StyleSheet, Text } from "react-native";
import IconBtn from "@/components/iconBtn.component";
import { Play, Pause, StepForward } from "lucide-react-native";
import LineMusic from "@/components/music/lineMusic.component";
import { useMusic } from "@/contexts/music.context";

import { Track } from "@/contexts/music.context";
import styles from "@/constants/styles.constant";
import { formatTime } from "@/tools/formatTime";

export default function PlayerPlayer({ track }: { track: Track }) {
  const { isPlaying, currentTrack,positionMillis,durationMillis, progress, play, pause, resume, next, prev } = useMusic();

  return (
    <View>
        <View style={style.line}>
            <LineMusic progress={progress}/>
        </View>

        <Text style={style.progress}>{formatTime(positionMillis)} / {formatTime(durationMillis)}</Text>

        <View style={style.Player}>
                <IconBtn func={prev} icon={StepForward}
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
                icon={isPlaying ? Pause : Play}
                strokeWidth={2.2}
                size={60}
                />
                <IconBtn func={next} icon={StepForward} 
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