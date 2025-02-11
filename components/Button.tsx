import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          (styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#FFD33D",
            borderRadius: 18,
          }),
        ]}
      >
        <Pressable
          style={[
            (styles.button,
            { backgroundColor: "#FFF", width: 320, borderRadius: 14 }),
          ]}
          onPress={onPress}
        >
          <FontAwesome name="picture-o" size={18} color={"#25292E"} />
          <Text style={[styles.buttonLabel, { color: "#25292E" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
