import { Search } from "lucide-react-native";
import styles from "@/constants/styles.constant";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchBar() {
  return (
    <View style={style.searchBar}>
      <Search size={20} color="#888" />

      <TextInput
        style={style.input}
        placeholder="Pesquisar"
        placeholderTextColor="#888"
      />
    </View>
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
    fontSize: 18,
    marginLeft: 8,
  },
});