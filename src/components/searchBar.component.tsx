import { Search } from "lucide-react-native";
import styles from "@/constants/styles.constant";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function SearchBar() {
  return (
    <TouchableOpacity style={style.searchBar} onPress={()=>{
          router.push("/search/search")
        }}>
      <Search size={20} color={styles.color4} />

      <Text style={style.input}>O que você quer ouvir?</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  searchBar: {
    margin: 10,
    paddingHorizontal: 12,
    backgroundColor: styles.color5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    marginLeft: 8,
    color: styles.color4,
    fontWeight: 500
  },
});