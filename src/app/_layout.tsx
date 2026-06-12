import { MusicProvider } from "@/contexts/music.context";
import { Stack } from "expo-router";

import MiniPlayer from "@/components/miniPlayer/miniPlayer";

export default function Layout() {
  return (
    <MusicProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="music/[id]" />
        <Stack.Screen name="playlist/[id]" />
        <Stack.Screen name="search/search" />
      </Stack>

      <MiniPlayer />
    </MusicProvider>
  );
}

