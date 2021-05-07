import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
// import Break from '../screens/Break';

const screens = {
  Home: {
    screen: Home
  },
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);