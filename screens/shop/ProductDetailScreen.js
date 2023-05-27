import { View, Text,TouchableOpacity, ScrollView,StyleSheet,Image, Button } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from "react-redux";
import Color from '../../constants/Color';
import * as cartActions from '../../store/actions/cart';


const ProductDetailScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const productId = route.params.productId;
  const title = route.params.title;
  const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
  return (
    <ScrollView>
    <View>
      <Image style={styles.image} 
      source={{uri:selectedProduct.imageUrl}}
      />
      <View style={styles.actions}>
          <Button color={Color.primary} title='Add to Cart' 
          onPress={()=>{
            dispatch(cartActions.addToCart(selectedProduct))
          }}/>
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
    </View>
    </ScrollView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  image:{ width:'100%',height:300}
,
price:
{
  fontFamily: 'serif',
  fontSize:20,
  color:'#888',
  textAlign:'center',
  marginVertical:20},
description:{
  fontFamily: 'serif',
  fontSize:14,textAlign:'center',marginHorizontal:20},
actions:{ 
  marginVertical:10,  
  alignItems:'center',
}
}
);