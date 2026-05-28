import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

export default function PrimaryButton({ title, isLoading = false, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={isLoading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && !isLoading ? styles.pressed : null,
        isLoading ? styles.disabled : null,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: 18,
  },
  disabled: {
    opacity: 0.7,
  },
  pressed: {
    backgroundColor: '#1d4ed8',
  },
  text: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
});
