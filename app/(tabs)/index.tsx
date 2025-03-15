import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { AppDispatch } from "@/stores/store";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  reset,
  selectCount,
} from "@/stores/toolkit/counterSlice";

export default function HomeScreen() {
  const counterState = useSelector(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#d2b8fc", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#6203fc"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redux Toolkit</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">Toolkit Counter:</ThemedText>
        <ThemedText>{counterState.toolkit.value}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.actionContainer}>
        <Button type="toolkit" onPress={() => dispatch(increment())}>
          Increment
        </Button>
        <Button type="toolkit" onPress={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button type="toolkit" onPress={() => dispatch(incrementAsync())}>
          Increment Async
        </Button>
        <Button type="toolkit" onPress={() => dispatch(decrementAsync())}>
          Decrement Async
        </Button>
        <Button type="toolkit" onPress={() => dispatch(reset())}>
          Reset
        </Button>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionContainer: {
    gap: 16,
  },
});
