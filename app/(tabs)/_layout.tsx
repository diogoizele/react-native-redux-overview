import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabTitle,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Toolkit",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name="atom"
              color={focused ? Colors["light"].tabIconSelected.toolkit : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Saga",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name="link"
              color={focused ? Colors["light"].tabIconSelected.saga : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
