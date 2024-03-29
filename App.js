
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {  useFonts} from "expo-font";


import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import TabNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({products : productsReducer,cart:cartReducer, orders:ordersReducer});
const store = createStore(rootReducer);

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  
  return (
    <Provider store={store}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <ShopNavigator/> */}
      <TabNavigator/>
      </Provider>
  );
}


