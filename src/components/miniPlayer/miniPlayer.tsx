import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useMusic } from "@/contexts/music.context";
import { Play, Pause, SkipForward } from "lucide-react-native";
import IconBtn from "@/components/iconBtn.component";
import styles from "@/constants/styles.constant";
import { router, usePathname } from "expo-router";

export default function MiniPlayer() {
  const { currentTrack, isPlaying, pause, resume, next, prev } = useMusic();
  const pathname = usePathname();

  if (!currentTrack) return null;

  function getAuthors() {
    return currentTrack?.authors.join(", ");
  }

  const bottom =
    pathname.startsWith("/music/") ||
    pathname.startsWith("/playlist/") ||
    pathname.startsWith("/search/")
      ? 50
      : 100;

  return (
    <TouchableOpacity
      onPress={() => {
        if (pathname !== `/music/${currentTrack.id}`) {
          router.push(`/music/${currentTrack.id}` as any);
        }
      }}
      style={[style.container, { bottom }]}
    >
      <View style={{ gap: 10, flexDirection: "row", alignItems: "center", width: "50%" }}>
        <Image
          source={
            typeof currentTrack.img === "string"
              ? { uri: currentTrack.img }
              : currentTrack.img
          }
          style={style.img}
        />

        <View style={style.text}>
          <Text style={style.title} numberOfLines={1}>
            {currentTrack.title}
          </Text>

          <Text style={style.subtitle} numberOfLines={1}>
            {getAuthors()}
          </Text>
        </View>
      </View>

      <View style={style.container2}>
        <IconBtn icon={SkipForward} func={prev} rotate={180} color={styles.color6} />

        <IconBtn
          icon={isPlaying ? Pause : Play}
          func={() => (isPlaying ? pause() : resume())}
          color={styles.color5}
          strokeWidth={2.2}
          size={30}
        />

        <IconBtn icon={SkipForward} color={styles.color6} func={next} />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        position: "absolute",
        bottom: 100,
        left: 10,
        right: 10,
        backgroundColor: styles.color4,
        padding: 7,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        
        zIndex: 999,

        shadowColor:styles.color3,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,

        elevation: 10,
    },
    title:{ 
        color: styles.color5, 
        fontWeight: "bold",
        fontSize: 16,
        overflow: "hidden",
        width: "100%"
    },
    subtitle:{
        color: styles.color6,
        fontSize: 14,
        overflow: "hidden",
        width: "100%"
    },
    text:{
        width: "100%"
    },
    container2:{ 
        gap: 10,
        flexDirection: "row", 
        alignItems: "center" 
    },
    img:{
        width: 55,
        height: 55,
        borderRadius: 5
    }
})
