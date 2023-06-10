import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import {Platform } from "react-native";
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderBtn from '../components/UI/HeaderButtons';



const ProductStackNavigator = createNativeStackNavigator()

const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// "react-native-reanimated": "~2.12.0",

        // "react-native-reanimated": ">= 1.0.0",


const ShopNavigator = () => {
 
  return (
 
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
            ),
             headerRight: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Order" iconName='md-cart' onPress={() => navigation.navigate('OrderScreen')} />
            </HeaderButtons>
            ),
         })
        }/>
        <ProductStackNavigator.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={({route})=>({ title: route.params.title})} />
        <ProductStackNavigator.Screen name='CartScreen' component={CartScreen} options={{title:"Cart screen"}} />
      </ProductStackNavigator.Navigator>
  );
}

const AdminNavigator = () => {
  return(
      <ProductStackNavigator.Navigator initialRouteName='AdminNavigator'>
 <ProductStackNavigator.Screen name='UserProductScreen' component={UserProductScreen} options={
         ({navigation})=>({ headerLeft: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Menu" iconName='md-cart' onPress={() => navigation.navigate('CartScreen')} />
            </HeaderButtons>
            ),
             headerRight: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Add" iconName='md-cart' onPress={() => navigation.navigate('EditProductScreen')} />
            </HeaderButtons>
            )
         
         })
        } />
        <ProductStackNavigator.Screen name='EditProductScreen' component={EditProductScreen} options={
         ({route})=>{
          //  const submitFn = route.params.submit;
         return {
            title:
            route.params.productId ? 
            'Edit Product'
      : 
      'Add Product',
            headerRight: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Menu" iconName='md-cart' onPress={""} />
            </HeaderButtons>
            )
         }}
        } />
        </ProductStackNavigator.Navigator>
     
  )
}
const OrderNavigator = () => {
  return(
   
      <ProductStackNavigator.Navigator initialRouteName='OrderNavigator'>
 <ProductStackNavigator.Screen name='OrderScreen' component={OrderScreen} options={
         ({navigation})=>({ headerLeft: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Menu" iconName='md-cart' onPress={() => navigation.navigate('ProductOverviewScreen')} />
            </HeaderButtons>
            )
         })
        } />
        </ProductStackNavigator.Navigator>

  )
}

const TabNavigator = () => {
  return (
  // <NavigationContainer>
  //    <ProductStackNavigator.Navigator>
  //     <ProductStackNavigator.Screen name="Home" component={ShopNavigator} />
  //     <ProductStackNavigator.Screen name="Settings" component={AdminNavigator} />
  //     <ProductStackNavigator.Screen name="Settings" component={OrderNavigator} />
  //   </ProductStackNavigator.Navigator>
  //   </NavigationContainer>

  <NavigationContainer>
     <Tab.Navigator activeColor="#f0edf6"
  inactiveColor="#3e2465"
  barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen name="Shop" component={ShopNavigator} />
      <Tab.Screen name="My Order" component={OrderNavigator} />
      <Tab.Screen name="Admin" component={AdminNavigator} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}




      // <Drawer.Navigator initialRouteName="Home">
      //   <Drawer.Screen name="Home" component={OrderScreen} />
      //   {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      // </Drawer.Navigator>

export default TabNavigator;




// export default createAppContainer(ProductStackNavigator);