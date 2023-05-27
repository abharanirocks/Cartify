import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import {Platform } from "react-native";
import { useRoute } from '@react-navigation/native';
import { HeaderButton,HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderBtn from '../components/UI/HeaderButtons';



const ProductStackNavigator = createNativeStackNavigator()

const ShopNavigator = () => {
 
  return (
  <NavigationContainer>
      <ProductStackNavigator.Navigator initialRouteName='ProductOverviewScreen' screenOptions={{
      title:'All Products',
      headerStyle:{
      backgroundColor:Platform === 'android' ? 'white' : ''
    },
    headerTintColor: Platform === 'android' ? 'white':'white'
    }}>
      <ProductStackNavigator.Screen name='ProductOverviewScreen' component={ProductOverviewScreen} options={
         ({navigation})=>({ headerLeft: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Cart" iconName='md-cart' onPress={() => navigation.navigate('CartScreen')} />
            </HeaderButtons>
            )
         })
        }/>
        <ProductStackNavigator.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={({route})=>({ title: route.params.title})} />
        <ProductStackNavigator.Screen name='CartScreen' component={CartScreen} options={""} />
      </ProductStackNavigator.Navigator>
  </NavigationContainer>
  );
}


export default ShopNavigator;
//   {
//   ProductOverview:ProductOverviewScreen
// }

// ,{
//   defaultNavigationOptions:{
//     headerStyle:{
//       backgroundColor:Platform === 'android' ? Color.primary : ''
//     },
//     headerTintColor: Platform === 'android' ? 'white':Color.primary
//   }
// });



// export default createAppContainer(ProductStackNavigator);