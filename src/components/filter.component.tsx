import styles from "@/constants/styles.constant";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

type Props = {
    filt: string[];
};

export default function Filter({ filt }: Props) {
    const [selected, setSelected] = useState<number | null>(0);

    return (
        <View style={style.container}>
            {filt.map((val, key) => (
                
                <TouchableOpacity
                    key={key}
                    onPress={() =>{
                        setSelected(key)
                    }}
                >
                    <Text
                        style={[
                            style.filt,
                            selected === key && style.clicked
                        ]}
                    >
                        {val}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 7,
    },
    filt: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: styles.color4,
        borderRadius: 20,
        textAlign: "center",
        color: styles.color5,
    },
    clicked: {
        backgroundColor: styles.color1,
        color: styles.color2
    },
});