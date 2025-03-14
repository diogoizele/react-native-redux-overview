import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectCount } from "../../stores/toolkit/counterSlice";

export const Loader = () => {
  const counterState = useSelector(selectCount);

  if (counterState.status !== "loading") {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <ActivityIndicator size="large" color="#6203fc" />
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
