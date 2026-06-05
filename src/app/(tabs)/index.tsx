import Filter from "@/components/filter.component";
import styles from "@/constants/styles.constant";
import Recent from "@/components/recent.component";
import { StyleSheet, ScrollView, Text } from "react-native";
import Section from "@/components/Section.component";
import Album from "@/components/album.component";

export default function Index(){
  return(<ScrollView style={style.container} showsVerticalScrollIndicator={false}>

    <Recent
        Playlists={[{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        },{
            Img: require("@/assets/1.jpg"),
            Title: "Playlist Legal"
        }]
    
    }
    />
    <Section title="Artistas que você curte">
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
    </Section>
    <Section title="Álbuns com as músicas que você adora">
        <Album 
            Subtitle="Artista"
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Subtitle="Artista"
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Subtitle="Artista"
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Subtitle="Artista"
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
    </Section>

    <Section title="Recentes" btn={
        <Text style={{color: styles.color6}}>
            Mostrar Tudo
        </Text>}>
        <Album 
            Title="MPB"
            Subtitle="Playlist - Henzo Brito"
            Img={require("@/assets/1.jpg")}
            Size={100}
            TitleLines={1}
        />
        <Album 
            Title="MPB"
            Subtitle="Playlist - Henzo Brito"
            Img={require("@/assets/1.jpg")}
            Size={100}
            TitleLines={1}
        />
        <Album 
            Title="Henzo Brito dos Santos"
            Subtitle="Artista"
            Img={require("@/assets/1.jpg")}
            Size={100}
            TitleLines={1}
            BorderRadius={200}
        />
        <Album 
            Title="MPB"
            Subtitle="Playlist - Henzo Brito"
            Img={require("@/assets/1.jpg")}
            Size={100}
            TitleLines={1}
        />
    </Section>
    <Section title="Seus Mixes Mais ouvidos">
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
    </Section>
    <Section title="Suas músicas estão com saudade">
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Subtitle="Playlist"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Subtitle="Artista"
            BorderRadius={400}
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Img={require("@/assets/1.jpg")}
        />
        <Album 
            Title="asdcvasdcasedfasdcvasdcasdf asdfasdcasdfcasdf casdcasdcasefascasdf"
            Subtitle="Playlist"
            Img={require("@/assets/1.jpg")}
        />
    </Section>

  </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: styles.color2
    },
    img:{
        width: 40,
        height: 40,
        borderRadius: "50%"
    },
    title:{
        fontSize: 20,
        color: styles.color5,
        fontWeight: 700
    }
})