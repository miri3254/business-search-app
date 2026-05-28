import { StyleSheet, Text, View } from 'react-native';

export default function MessageBox({ message, type = 'info' }) {
  if (!message) {
    return null;
  }

  return (
    <View style={[styles.box, type === 'error' ? styles.error : styles.info]}>
      <Text style={[styles.text, type === 'error' ? styles.errorText : styles.infoText]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
  },
  error: {
    backgroundColor: '#fef2f2',
    borderColor: '#fecaca',
  },
  errorText: {
    color: '#991b1b',
  },
  info: {
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  infoText: {
    color: '#1e40af',
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'right',
  },
});
