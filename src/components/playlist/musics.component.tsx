import styles from "@/constants/styles.constant"
import { View , StyleSheet} from "react-native" 

import { TrackID } from "@/db/Playlists"
import { getTracksByPlaylistID } from "@/db/setPlaylists"

type Props = {
    id: TrackID
}

import IconBtn from "../iconBtn.component"
import { EllipsisVertical } from "lucide-react-native"

import { router } from "expo-router"

import MusicMini from "../musicMini.component"

export default function Musics({id}: Props){

    const musics = getTracksByPlaylistID(id);

    return (
    <View style={style.container}>
        {musics.map((music) => (
            <MusicMini
                key={music?.id}
                func={() => router.push(`/music/${music?.id}` as any)}
                img={music?.img}
                name={music?.title}
                authors={music?.authors}
            >
            <IconBtn func={() => {}} icon={EllipsisVertical} />
        </MusicMini>
        ))}
    </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: styles.color3,
        marginTop: -1
    },
})

