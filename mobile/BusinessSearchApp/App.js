import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SearchScreen from './screens/SearchScreen';
import ResultsScreen from './screens/ResultsScreen';
import { searchBusinesses } from './services/businessApi';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(searchText) {
    const trimmedQuery = searchText.trim();

    if (!trimmedQuery) {
      setError('יש להזין טקסט לחיפוש');
      setHasSearched(false);
      setResults([]);
      return;
    }

    setQuery(trimmedQuery);
    setError('');
    setIsLoading(true);

    try {
      const businesses = await searchBusinesses(trimmedQuery);
      setResults(businesses);
      setHasSearched(true);
    } catch (searchError) {
      setError(searchError.message);
      setResults([]);
      setHasSearched(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleBackToSearch() {
    setHasSearched(false);
    setError('');
  }

  return (
    <SafeAreaView style={styles.container}>
      {hasSearched ? (
        <ResultsScreen
          query={query}
          results={results}
          onBack={handleBackToSearch}
        />
      ) : (
        <SearchScreen
          error={error}
          isLoading={isLoading}
          onSearch={handleSearch}
        />
      )}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
});
