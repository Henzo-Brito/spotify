export type TrackID = string

export type Track = {
  id: TrackID;
  title: string;
  source: any;
  authors: string[],
  img: any
};

export type Playlist = {
    id: TrackID
    name: string 
    tracks: TrackID[]
    img: any
}

export const tracks: Track[] = [
  {
    id: "1",
    title: "Bom Dia Tristeza",
    source: require("@msc/Bom Dia Tristeza.mp3"),
    authors: ["Adoniran Barbosa"],
    img: require("@img/musics/Adoniran Barbosa.png")
  },
  {
    id: "2",
    title: "Corcovado (Quiet Nights Of Quiet Stars)",
    source: require("@msc/Corcovado.mp3"),
    authors: ["Stan Getz", "Astrud Gilberto", "Antônio Carlos Jobim", "João Gilberto"],
    img: require("@img/musics/Tom Jobim.png")
  },
  {
    id: "3",
    title: "Devaneio",
    source: require("@msc/Devaneio.mp3"),
    authors: ["Jorge Vercillo"],
    img: require("@img/musics/Jorge Vercilo.png")
  },
  {
    id: "4",
    title: "Esquecimento",
    source: require("@msc/Esquecimento.mp3"),
    authors: ["Skank"],
    img: require("@img/musics/Skank.png")
  },
  {
    id: "5",
    title: "Flor do Medo",
    source: require("@msc/Flor do Medo.mp3"),
    authors: ["Djavan"],
    img: require("@img/musics/Djavan.png")
  },
  {
    id: "6",
    title: "Girassol - Acústico",
    source: require("@msc/Girassol.mp3"),
    authors: ["IVYSON"],
    img: require("@img/musics/IVYSON.png")
  },
  {
    id: "7",
    title: "Iracema",
    source: require("@msc/Iracema.mp3"),
    authors: ["Adoniran Barbosa"],
    img: require("@img/musics/Adoniran Barbosa.png")
  },
  {
    id: "8",
    title: "Lamento",
    source: require("@msc/Lamento.mp3"),
    authors: ["Tim Maia"],
    img: require("@img/musics/Tim Maia.png")
  },
  {
    id: "9",
    title: "Me Chamando de Paixão",
    source: require("@msc/Me Chamando de Paixão.mp3"),
    authors: ["Jorge Ben Jor"],
    img: require("@img/musics/Jorge Ben Jor.png")
  },
  {
    id: "10",
    title: "Me Desculpa Jay-Z - Remix",
    source: require("@msc/Me Desculpa Jay-Z.mp3"),
    authors: ["NZ Gang", "Rikas", "Kess"],
    img: require("@img/musics/Baco Exu do Blues.png")
  },
  {
    id: "11",
    title: "Melhor Lugar",
    source: require("@msc/Melhor Lugar.mp3"),
    authors: ["Jorge Vercillo"],
    img: require("@img/musics/Jorge Vercilo.png")
  },
  {
    id: "12",
    title: "O Que É o Amor - Faixa Bônus",
    source: require("@msc/O Que É o Amor.mp3"),
    authors: ["Arlindo Cruz"],
    img: require("@img/musics/Arlindo Cruz.png")
  },
  {
    id: "13",
    title: "Pétala",
    source: require("@msc/Pétala.mp3"),
    authors: ["Djavan"],
    img: require("@img/musics/Djavan.png")
  },
  {
    id: "14",
    title: "Pra Você",
    source: require("@msc/Pra Você.mp3"),
    authors: ["Onze:20"],
    img: require("@img/musics/Onze20.png")
  },
  {
    id: "15",
    title: "Preciso Dizer Que Te Amo",
    source: require("@msc/Preciso Dizer Que Te Amo.mp3"),
    authors: ["Cazuza", "Bebel Gilberto"],
    img: require("@img/musics/Cazuza.png")
  },
  {
    id: "16",
    title: "Primavera (Vai Chuva)",
    source: require("@msc/Primavera (Vai Chuva).mp3"),
    authors: ["Tim Maia"],
    img: require("@img/musics/Tim Maia.png")
  },
  {
    id: "17",
    title: "Samurai (feat. Stevie Wonder)",
    source: require("@msc/Samurai (feat. Stevie Wonder).mp3"),
    authors: ["Djavan", "Stevie Wonder"],
    img: require("@img/musics/Djavan.png")
  },
  {
    id: "18",
    title: "São Gonça",
    source: require("@msc/São Gonça.mp3"),
    authors: ["Seu Jorge"],
    img: require("@img/musics/Seu Jorge.png")
  },
  {
    id: "19",
    title: "Será que é amor - Ao vivo",
    source: require("@msc/Será que é amor.mp3"),
    authors: ["Arlindo Cruz"],
    img: require("@img/musics/Arlindo Cruz.png")
  },
  {
    id: "20",
    title: "Tive Razão - 2024 Remaster",
    source: require("@msc/Tive Razão - 2024.mp3"),
    authors: ["Seu Jorge", "-M-", "Pretinho da Serrinha"],
    img: require("@img/musics/Seu Jorge.png")
  },
  {
    id: "21",
    title: "Vive",
    source: require("@msc/Vive.mp3"),
    authors: ["Djavan"],
    img: require("@img/musics/Djavan.png")
  },
  {
    id: "22",
    title: "Like Him",
    source: require("@msc/Like Him.mp3"),
    authors: ["Tyler The Creator"],
    img: require("@img/1.jpg")
  }
];

export const playlists: Playlist[] = [
    {
        id: "1",
        img: require("@img/MPB.jpg"),
        name: "MPB",
        tracks: ["1", "2", "3", "4", "5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20", "21"]
    },
    {
        id: "2",
        img: require("@img/PlaylistBoa.jpg"),
        name: "Playlist Boa",
        tracks: ["22"]
    },
]