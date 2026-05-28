import { StyleSheet, Text, View } from 'react-native';

export default function BusinessCard({ business }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{business.name}</Text>
      <Text style={styles.category}>{business.category}</Text>

      <View style={styles.details}>
        <Text style={styles.detail}>עיר: {business.city}</Text>
        <Text style={styles.detail}>כתובת: {business.address}</Text>
        <Text style={styles.detail}>טלפון: {business.phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dde2ee',
    padding: 16,
    marginBottom: 12,
  },
  name: {
    color: '#1f2937',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'right',
  },
  category: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'right',
  },
  details: {
    marginTop: 12,
    gap: 6,
  },
  detail: {
    color: '#4b5563',
    fontSize: 15,
    textAlign: 'right',
  },
});
