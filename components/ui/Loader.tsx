import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { Colors } from "@/constants/Colors";
import { selectCount } from "@/stores/toolkit/counterSlice";

export const Loader = () => {
  const counterState = useSelector(selectCount);

  if (
    counterState.toolkit.status !== "loading" &&
    counterState.saga.status !== "loading"
  ) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={
          counterState.saga.status === "loading"
            ? Colors["light"].tabIconSelected.saga
            : Colors["light"].tabIconSelected.toolkit
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
