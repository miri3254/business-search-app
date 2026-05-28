import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import MessageBox from '../components/MessageBox';
import PrimaryButton from '../components/PrimaryButton';

export default function SearchScreen({ error, isLoading, onSearch }) {
  const [searchText, setSearchText] = useState('');

  function submitSearch() {
    onSearch(searchText);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>חיפוש עסקים</Text>
          <Text style={styles.subtitle}>חפשי לפי שם עסק, קטגוריה או עיר</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>טקסט לחיפוש</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
            onChangeText={setSearchText}
            onSubmitEditing={submitSearch}
            placeholder="לדוגמה: pizza, food, Jerusalem"
            returnKeyType="search"
            style={styles.input}
            textAlign="right"
            value={searchText}
          />

          <PrimaryButton
            isLoading={isLoading}
            onPress={submitSearch}
            title="חיפוש"
          />

          <MessageBox message={error} type="error" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  form: {
    gap: 14,
  },
  header: {
    marginBottom: 28,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderRadius: 8,
    borderWidth: 1,
    color: '#111827',
    fontSize: 16,
    minHeight: 52,
    paddingHorizontal: 14,
  },
  label: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'right',
  },
  subtitle: {
    color: '#64748b',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    textAlign: 'right',
  },
  title: {
    color: '#111827',
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'right',
  },
});
