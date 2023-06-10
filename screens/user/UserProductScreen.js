import { View, Text ,FlatList, Button, Alert } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/Productitem'
import * as productsActions from '../../store/actions/products';
import { useNavigation } from '@react-navigation/native';



const UserProductScreen = () => {
      const navigation = useNavigation();
    const userProducts = useSelector(state => state.products.userProducts);
console.log(userProducts)
const dispatch = useDispatch();

  // const editProductHandler = id => {
  //   navigation.navigate('EditProduct', { productId: id });
  // };
  // ()=>navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,title:itemData.item.title})

const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        }
      }
    ]);
  };

  return (
    <FlatList
    data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            ()=>navigation.navigate('EditProduct',{productId:itemData.item.id,title:itemData.item.title})
          }}
        >
          <Text>yfyty</Text>
          <Button
            color={""}
            title="Edit"
            onPress={() => {
            ()=>navigation.navigate('EditProduct',{productId:itemData.item.id,title:itemData.item.title})
            }}
          />
          <Button
            color={""}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
      />
  )
}

export default UserProductScreen