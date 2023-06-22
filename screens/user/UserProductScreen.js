import React from 'react';
import { FlatList, Button, StyleSheet, Alert, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Constants from 'expo-constants'
import ProductItem from '../../components/shop/ProductItem';
import * as productsActions from '../../store/actions/products';
import { useNavigation } from '@react-navigation/native';


const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();
    const navigation = useNavigation();

  

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
    <View style={styles.container}>
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
    navigation.navigate('EditProductScreen', { productId: itemData.item.id });
          }}
        >
          <Button
            title="Edit"
            onPress={() => {
    navigation.navigate('EditProductScreen', { productId: itemData.item.id });
            }}
          />
          <Button
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight*1.5
  }
});
// UserProductsScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'Your Products',
//     headerLeft: (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>
//     ),
//     headerRight: (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Add"
//           iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
//           onPress={() => {
//             navData.navigation.navigate('EditProduct');
//           }}
//         />
//       </HeaderButtons>
//     )
//   };
// };

export default UserProductsScreen;
