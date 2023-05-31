import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react'
import OrderItem from '../../components/shop/OrderItem';


const OrderScreen = () => {
    const orders = useSelector(state => state.orders.orders);

    console.log("order state...................",orders)

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  )
}

export default OrderScreen