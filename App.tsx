import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/styles/ThemeProvider';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'MedievalSharp-Regular': require('./src/assets/fonts/MedievalSharp-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppNavigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
