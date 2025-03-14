import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "../../constants/Colors";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  type: "toolkit" | "saga";
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor:
            props.type === "saga"
              ? Colors["light"].tabIconSelected.saga
              : Colors["light"].tabIconSelected.toolkit,
        },
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",  
  },
});
