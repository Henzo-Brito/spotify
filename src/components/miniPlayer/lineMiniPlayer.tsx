import styles from "@/constants/styles.constant";
import { View, StyleSheet } from "react-native";

type Props = {
  progress: number; // 0 a 1
};

export default function LineMusic({ progress }: Props) {
  const safeProgress = Math.min(Math.max(progress, 0), 1);

  return (
    <View style={style.line}>
      <View style={[style.lineD, { width: `${safeProgress * 100}%` }]} />

      <View
        style={[
          style.circle,
          { left: `${safeProgress * 100}%` },
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