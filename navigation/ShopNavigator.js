import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import {Platform ,StyleSheet} from "react-native";
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderBtn from '../components/UI/HeaderButtons';
import Constants from 'expo-constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const ProductStackNavigator = createNativeStackNavigator()

const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// "react-native-reanimated": "~2.12.0",

        // "react-native-reanimated": ">= 1.0.0",


const ShopNavigator = () => {
 
  return (
 
      <ProductStackNavigator.Navigator initialRouteName='ProductOverviewScreen' screenOptions={{
      title:'All Products',
      headerTransparent: true,
      headerStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set the background color with opacity
    },
    cardStyle: { backgroundColor: 'transparent' },
    headerTintColor: Platform === 'android' ? 'white':'black'
    }}>
      <ProductStackNavigator.Screen name='ProductOverviewScreen' component={ProductOverviewScreen} options={
         ({navigation})=>({ headerLeft: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          {/* <Item title="Cart" iconName='cart' onPress={() => navigation.navigate('CartScreen')} /> */}
          <MaterialCommunityIcons name="cart" size={25} onPress={() => navigation.navigate('CartScreen')} style={{padding:6}}/>
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
      <ProductStackNavigator.Navigator initialRouteName='AdminNavigator'
      screenOptions={{
      
      headerTransparent: true,
      headerStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set the background color with opacity
    },
    cardStyle: { backgroundColor: 'transparent' },
    headerTintColor: Platform === 'android' ? 'white':'black'
    }}>
 <ProductStackNavigator.Screen name='UserProductScreen' component={UserProductScreen} options={
         ({navigation})=>{ 
              return {
          headerTitle:"Your Products",
             headerRight: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          {/* <Item title="Add" iconName='md-cart' onPress={() => navigation.navigate('EditProductScreen')} /> */}
                    <MaterialCommunityIcons name="plus" size={27} onPress={() => navigation.navigate('EditProductScreen')} style={{padding:6}}/>

            </HeaderButtons>
            )
         
         }}
        } />
        <ProductStackNavigator.Screen name='EditProductScreen' component={EditProductScreen} options={
         ({route})=>{
          const submitFn = route.params?.submit;
          console.log(route.params)
          return{ 
    headerTitle: route.params?.productId ? 'Edit Product' : 'Add Product',
            headerRight: () => (
           <HeaderButtons  HeaderButtonComponent={HeaderBtn}>
          <Item title="Save" iconName='md-cart' onPress={submitFn} />
            </HeaderButtons>
            )
         }}
        } />
        </ProductStackNavigator.Navigator>
     
  )
}
const OrderNavigator = () => {
  return(
   
      <ProductStackNavigator.Navigator initialRouteName='OrderNavigator'screenOptions={{
      title:"Your Orders",
      headerTransparent: true,
      headerStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set the background color with opacity
    },
    cardStyle: { backgroundColor: 'transparent' },
    headerTintColor: Platform === 'android' ? 'white':'black'
    }}>
 <ProductStackNavigator.Screen name='OrderScreen' component={OrderScreen} 
        />
        </ProductStackNavigator.Navigator>

  )
}

const TabNavigator = () => {
  return (
 

  <NavigationContainer>
     <Tab.Navigator activeColor="#f0edf6"
  inactiveColor="#3e2465"
  barStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
  // screenOptions={{
  //   tabBarVisible: false,
  //   // tabBarIcon:{size:0},tabBarBadgeStyle:{color:"black"}
  // }}
   screenOptions={{
    tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 19
    },
    tabBarIconStyle: { display: "none" },
  }}
  // tabBarOptions: {
  // showIcon: true,
  // showLabel: false,
  // lazyLoad: true,
  // style: {
  //   backgroundColor: 'transparent',
  //   borderTopWidth: 0,
  //   position: 'absolute',
  //   left: 50,
  //   right: 50,
  //   bottom: 20,
  //   height: 100
  // }
  >
      <Tab.Screen name="Shop" component={ShopNavigator} options={{
          tabBarLabel: 'Shop',
           tabBarIconStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="My Order" component={OrderNavigator} options={{
          tabBarLabel: 'My Orders',
           tabBarIconStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Admin" component={AdminNavigator} options={{
          tabBarLabel: 'Users',
           tabBarIconStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  }
});


      // <Drawer.Navigator initialRouteName="Home">
      //   <Drawer.Screen name="Home" component={OrderScreen} />
      //   {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      // </Drawer.Navigator>

export default TabNavigator;




// export default createAppContainer(ProductStackNavigator);