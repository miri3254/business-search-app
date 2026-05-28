import { Platform } from 'react-native';

const API_BASE_URL = Platform.select({
  android: 'http://10.0.2.2:5176',
  default: 'http://localhost:5176',
});

export async function searchBusinesses(query) {
  const url = `${API_BASE_URL}/api/businesses/search?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('אירעה שגיאה בחיפוש. נסי שוב.');
  }

  return response.json();
}
