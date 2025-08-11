import SafeScreen from "@/components/SafeScreen";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { ClerkProvider } from '@clerk/clerk-expo'

export default function RootLayout() {
  return <ClerkProvider>
    <SafeScreen>
    <Slot />
    <StatusBar barStyle={"default"} />
  </SafeScreen>;
  </ClerkProvider>
}
