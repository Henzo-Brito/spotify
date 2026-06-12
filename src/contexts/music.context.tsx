import { createContext, useContext, useEffect, useState } from "react";
import { Audio } from "expo-av";

export type Track = {
  id: string;
  title: string;
  source: any;
  authors: string[]
};

type MusicContextType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;

  play: (track: Track) => Promise<void>;
  pause: () => Promise<void>;
  resume: () => Promise<void>;

  next: () => void;
  prev: () => void;

  positionMillis: number;
  durationMillis: number;

  setPlaylist: (tracks: Track[]) => void;
};

const MusicContext = createContext({} as MusicContextType);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const [playlist, setPlaylistState] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(0);

  // 🎧 PLAY
  async function play(track: Track) {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        track.source,
        { shouldPlay: true }
      );

      newSound.setOnPlaybackStatusUpdate((status) => {
       if (!status.isLoaded) return;

        setPositionMillis(status.positionMillis);

        setDurationMillis(status.durationMillis ?? 0);

        const duration = status.durationMillis ?? 0;

        if (duration > 0) {
        setProgress(status.positionMillis / duration);
      }});

      setSound(newSound);
      setCurrentTrack(track);
      setIsPlaying(true);

      // sincroniza índice
      const index = playlist.findIndex((t) => t.id === track.id);
      if (index !== -1) setCurrentIndex(index);

    } catch (err) {
      console.log("Erro play:", err);
    }
  }

  // ⏸ PAUSE
  async function pause() {
    if (!sound) return;
    await sound.pauseAsync();
    setIsPlaying(false);
  }

  // ▶ RESUME (CORRIGIDO)
  async function resume() {
    if (!sound) return;
    await sound.playAsync();
    setIsPlaying(true);
  }

  // ⏭ NEXT
  function next() {
    if (playlist.length === 0) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);

    play(playlist[nextIndex]);
  }

  // ⏮ PREV
  function prev() {
    if (playlist.length === 0) return;

    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;

    setCurrentIndex(prevIndex);

    play(playlist[prevIndex]);
  }

  function setPlaylist(tracks: Track[]) {
    setPlaylistState(tracks);
  }

  // 🧹 CLEANUP
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        progress,
        play,
        pause,
        resume,
        next,
        prev,
        positionMillis,
        durationMillis,
        setPlaylist,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}