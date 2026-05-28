import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import BusinessCard from '../components/BusinessCard';
import MessageBox from '../components/MessageBox';

export default function ResultsScreen({ query, results, onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable accessibilityRole="button" onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>חיפוש חדש</Text>
        </Pressable>

        <Text style={styles.title}>תוצאות חיפוש</Text>
        <Text style={styles.subtitle}>עבור: {query}</Text>
      </View>

      {results.length === 0 ? (
        <MessageBox message="לא נמצאו עסקים שמתאימים לחיפוש." />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BusinessCard business={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    borderColor: '#2563eb',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 18,
  },
  list: {
    paddingBottom: 24,
  },
  subtitle: {
    color: '#64748b',
    fontSize: 16,
    marginTop: 6,
    textAlign: 'right',
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 20,
    textAlign: 'right',
  },
});
