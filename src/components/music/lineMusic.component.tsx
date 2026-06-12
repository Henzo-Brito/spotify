import styles from "@/constants/styles.constant";
import { View, StyleSheet } from "react-native";

type Props = {
  progress: number; // 0 a 1
  id: string | number
};

import { useMusic } from "@/contexts/music.context";

export default function LineMusic({ progress, id }: Props) {
  let safeProgress = Math.min(Math.max(progress, 0), 1);
  const {currentTrack} = useMusic();

  
  if (id === currentTrack?.id) {
     safeProgress = safeProgress * 100
  }else{
    safeProgress = 0;
  }
  

  return (
    <View style={style.line}>
      <View style={[style.lineD, { width: `${safeProgress}%` }]} />

      <View
        style={[
          style.circle,
          { left: `${safeProgress}%` },
        ]}
      />
    </View>
  );
}

const style = StyleSheet.create({
  line: {
    position: "relative",
    backgroundColor: styles.color4,
    marginTop: 30,
    width: "100%",
    borderRadius: 10,
    height: 7,
    justifyContent: "center",
  },

  lineD: {
    transitionProperty: "width",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: styles.color1,
  },

  circle: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: styles.color1,
    borderWidth: 3,
    borderColor: styles.color3,

    // 👇 centraliza melhor no trilho
    transform: [{ translateX: -7 }],
  },
});