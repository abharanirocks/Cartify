import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import * as cartActions from '../../store/actions/cart';



import ProductItem from '../../components/shop/Productitem';

const ProductOverviewScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.availableProducts);
  return <FlatList
      data={products} 
      keyExtractor={item => item.id} 
      renderItem={itemData => 
      <ProductItem image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={()=>navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,title:itemData.item.title})}
          onAddToCart={()=>{dispatch(cartActions.addToCart(itemData.item))}}/>} />
  
}

export default ProductOverviewScreen