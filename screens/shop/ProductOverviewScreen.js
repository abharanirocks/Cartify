import { View, StyleSheet, FlatList,Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import * as cartActions from '../../store/actions/cart';
import Constants from 'expo-constants'
import Colors from '../../constants/Color'


import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.availableProducts);
  return( 
    <View style={styles.container}>
  <FlatList
      data={products} 
      keyExtractor={item => item.id} 
      renderItem={itemData => 
      <ProductItem image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={()=>navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,title:itemData.item.title})}
          onAddToCart={()=>{dispatch(cartActions.addToCart(itemData.item))}}>
                    <Button color ={Colors.primary}title='View Details' onPress={()=>navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,title:itemData.item.title})} />
        <Button color ={Colors.primary} title='To Cart' onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}/> 
      
          </ProductItem>} 
          
          
          />
          </View>
  )
  
}
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight*1.5
  }
});

export default ProductOverviewScreen