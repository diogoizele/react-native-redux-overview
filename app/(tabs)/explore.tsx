import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CounterActions } from "@/stores/saga/actions";
import { selectCount } from "@/stores/toolkit/counterSlice";

export default function TabTwoScreen() {
  const counterState = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#d3f2a7", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#85db0d"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saga</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">Toolkit Counter:</ThemedText>
        <ThemedText>{counterState.saga.value}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.actionContainer}>
        <Button
          type="saga"
          onPress={() => dispatch(CounterActions.increment())}
        >
          Increment
        </Button>
        <Button
          type="saga"
          onPress={() => dispatch(CounterActions.decrement())}
        >
          Decrement
        </Button>
        <Button
          type="saga"
          onPress={() => dispatch(CounterActions.incrementAsync())}
        >
          Increment Async
        </Button>
        <Button
          type="saga"
          onPress={() => dispatch(CounterActions.decrementAsync())}
        >
          Decrement Async
        </Button>
        <Button type="saga" onPress={() => dispatch(CounterActions.reset())}>
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
