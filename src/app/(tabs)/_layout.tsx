import { Tabs } from "expo-router";
import { Header } from "@/modules/header.module";
import IconBtn from "@/modules/iconBtn.module";
import { Search } from "lucide-react-native";

export default function Layout(){
  return(<Tabs>
    <Tabs.Screen
      options={{
        header:()=>{
          return(
            <Header
              title="Spotify"
              img={require("@/assets/1.jpg")}
            >
              <IconBtn icon={Search} func={()=>{}} />
            </Header>)}
      }}
      name="index"
    />
  </Tabs>)
}
