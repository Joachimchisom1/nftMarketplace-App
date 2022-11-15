import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}
const App = () => {
  return (
    <NavigationContainer theme={theme}>

      <Stack.Navigetor
        screenOptions={{ headerShown: false }}
        initailRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigetor>
      
    </NavigationContainer>
  )
}
export default App
