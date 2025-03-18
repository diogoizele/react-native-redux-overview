import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";

interface LibDialogButton {
  title: string;
  onPress: () => void;
}

export interface LibDialogProps {
  title?: string;
  description?: string;
  primaryButton?: LibDialogButton;
  secondaryButton?: LibDialogButton;
}

export const LibDialog = ({
  description,
  primaryButton,
  title,
  secondaryButton,
}: LibDialogProps) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.dialog}>
        {title && <Text style={styles.title}>{title}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
        {primaryButton && (
          <Button type="saga" onPress={primaryButton.onPress}>
            {primaryButton.title}
          </Button>
        )}
        {secondaryButton && (
          <Button type="saga" onPress={secondaryButton.onPress}>
            {secondaryButton.title}
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    inset: 0,
    zIndex: 100,
  },
  dialog: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    minHeight: 200,
    minWidth: 300,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});
