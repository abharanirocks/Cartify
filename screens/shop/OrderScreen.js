import { FlatList, StyleSheet, View,Text } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react'
import OrderItem from '../../components/shop/OrderItem';
import Constants from 'expo-constants'


const OrderScreen = () => {
    const orders = useSelector(state => state.orders.orders);
// route.params?.productId ? 'Edit Product' : 'Add Product'
    console.log("order state...................",orders)

  return (
    <View style={styles.container}> 
   {orders.length==0 ? <Text style={styles.errtxt}>Nothing in Order History</Text>: <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />}

   
    </View>
  )
}
const styles = StyleSheet.create({
  errtxt:{
alignContent:'center',
textAlign:"center",
display:'flex',
justifyContent:"center",
fontSize:15
  },
  container: {
    marginTop: Constants.statusBarHeight*3
  }
});

export default OrderScreen