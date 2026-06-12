import { createContext, useContext, useEffect, useState } from "react";
import { useAudioPlayer } from "expo-audio";
import { Track } from "@/db/Playlists";

type MusicContextType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;

  play: (track: Track) => Promise<void>;
  pause: () => Promise<void>;
  resume: () => Promise<void>;

  next: () => Track | null;
  prev: () => Track | null;

  playlist: Track[];

  positionMillis: number;
  durationMillis: number;

  setPlaylist: (tracks: Track[]) => void;
};

const MusicContext = createContext({} as MusicContextType);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const player = useAudioPlayer();

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
      setCurrentTrack(track);

      const index = playlist.findIndex((t) => t.id === track.id);
      if (index !== -1) setCurrentIndex(index);

      player.replace(track.source);
      player.play();

      setIsPlaying(true);
    } catch (err) {
      console.log("Erro play:", err);
    }
  }

  // ⏸ PAUSE
  async function pause() {
    player.pause();
    setIsPlaying(false);
  }

  // ▶ RESUME
  async function resume() {
    player.play();
    setIsPlaying(true);
  }

  // ⏭ NEXT
  function next() {
    if (playlist.length === 0) return null;

    const index = (currentIndex + 1) % playlist.length;
    const track = playlist[index];

    setCurrentIndex(index);
    play(track);

    return track;
  }

  // ⏮ PREV
  function prev() {
    if (playlist.length === 0) return null;

    const index =
      currentIndex === 0
        ? playlist.length - 1
        : currentIndex - 1;

    const track = playlist[index];

    setCurrentIndex(index);
    play(track);

    return track;
  }

  // 📊 PROGRESS TRACKING
  useEffect(() => {
    const interval = setInterval(() => {
      const current = player.currentTime ?? 0;
      const duration = player.duration ?? 0;

      setPositionMillis(current);
      setDurationMillis(duration);

      if (duration > 0) {
        setProgress(current / duration);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [player]);

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        progress,
        playlist,

        play,
        pause,
        resume,
        next,
        prev,

        positionMillis,
        durationMillis,

        setPlaylist: setPlaylistState,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}