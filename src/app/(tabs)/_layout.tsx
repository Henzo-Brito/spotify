import { Header } from "@/components/header.component";
import IconBtn from "@/components/iconBtn.component";

import Filter from "@/components/filter.component";
import styles from "@/constants/styles.constant";
import { Tabs } from "expo-router";
import { Camera, Home, Search, LibraryBig, Plus } from "lucide-react-native";
import { MusicProvider } from "@/contexts/music.context";

export default function Layout(){
  return(
     <MusicProvider>
      <Tabs
        screenOptions={{
          tabBarStyle:{
            backgroundColor: styles.color3,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: styles.color5,
          tabBarInactiveTintColor: styles.color6,
          tabBarIconStyle:{
            marginTop: 5
          },
          tabBarLabelStyle:{
            fontSize: 10.5
          }
        }}
      >
        <Tabs.Screen
          options={{
            header:()=>{
              return(
                <Header
                  img={require("@img/1.jpg")}
                >
                    <Filter filt={["Tudo","Música", "Podcasts"]}/>
                </Header>)
            },
            tabBarIcon:  ({ color, size }) => (
              <Home color={color} strokeWidth={2.5} size={size} />
            )
          }}
          name="index"
        />
        <Tabs.Screen
          options={{
            header:()=>{
              return(
                <Header
                  title="Buscar"
                  img={require("@img/1.jpg")}
                >
                  <IconBtn icon={Camera} strokeWidth={2} func={()=>{}} />
                </Header>)
            },
            tabBarIcon:  ({ color, size }) => (
              <Search color={color} strokeWidth={2.5} size={size} />
            )
          }}
          name="search"
        />

        <Tabs.Screen
          options={{
            header:()=>{
              return(
                <Header
                  title="Sua Biblioteca"
                  img={require("@img/1.jpg")}
                >
                  <IconBtn strokeWidth={2} icon={Search} func={()=>{}} />
                  <IconBtn strokeWidth={2} icon={Plus} func={()=>{}} />
                </Header>)
            },
            tabBarIcon:  ({ color, size }) => (
              <LibraryBig color={color} strokeWidth={2.5} size={size} />
            )
          }}
          name="library"
        />
    </Tabs>

  </MusicProvider>
  )
}
