import { View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import * as cartActions from '../../store/actions/cart';
import * as productsActions from '../../store/actions/products';



import ProductItem from '../../components/shop/Productitem';

const ProductOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.availableProducts);
  console.log(products,"gyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
  console.log(loadProducts,"uuuuuuuuuuuu")
  console.log(productsActions.fetchProducts(),"eeeeee")
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(productsActions.fetchProducts());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  // useEffect(() => {
  //   const willFocusSub = props.navigation.addListener(
  //     'willFocus',
  //     loadProducts
  //   );

  //   return () => {
  //     willFocusSub.remove();
  //   };
  // }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  const selectItemHandler = (id, title) => {
    navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title
    });
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadProducts}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found. Maybe start adding some!</Text>
      </View>
    );
  }
  return (
    <FlatList
      onRefresh={loadProducts}
      refreshing={isRefreshing}
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
  // return <FlatList
  //     data={products} 
  //     keyExtractor={item => item.id} 
  //     renderItem={itemData => 
  //     <ProductItem image={itemData.item.imageUrl}
  //         title={itemData.item.title}
  //         price={itemData.item.price}
  //         onViewDetail={()=>navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,title:itemData.item.title})}
  //         onAddToCart={()=>{dispatch(cartActions.addToCart(itemData.item))}}/>} />
  
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default ProductOverviewScreen