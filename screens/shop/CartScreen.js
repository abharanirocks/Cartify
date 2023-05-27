import { Button, StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import Color from '../../constants/Color';

const CartScreen = (props) => {
  
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
 
   const dispatch = useDispatch();
  const cartItems = useSelector(state => {
    console.log("state------------------------------------------",state.cart)
    const transformedCartItems = [];
    for(const key in state.cart.items){
      transformedCartItems.push({
        productId:key,
        productTitle:state.cart.items[key].productTitle,
        productPrice:state.cart.items[key].productPrice,
        quantity:state.cart.items[key].quantity,
        sum:state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a,b)=>a.productId > b.productId ? 1 : -1);
  });
  
  // console.log("Cart item use selector------------------------------------------ ",cartItems)

  
  
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: 
        <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button color={Color.accent} title="Order Now" 
        disabled={cartItems === undefined}
        />
      </View>
      
    <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            deletable
            onRemove={() => {
              console.log("itemData.item.productId",itemData.item.productId)
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  screen:{margin:20},
  summary:{flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginBottom:20,
  padding:10,
  shadowColor:'black',
  shadowOpacity:0.26,
  shadowOffset:{width:0,height:2},
  shadowRadius:8,
  elevation:5,
  borderRadius:10,
  backgroundColor:'white'
},
summaryText:{
  fontFamily:'serif',
  fontSize:18
},
amount:{
  color:'red'}
})