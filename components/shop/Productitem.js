import { Button, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from '../../constants/Color'
import Card from '../UI/Card'

const Productitem = (props) => {
  return (

    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
    // <View style={styles.product}>
    //   <TouchableOpacity onPress={props.onViewDetail} activeOpacity={0.8} useForeground>
    //   <View style={styles.imageContainer}>
    //   <Image style ={styles.image} source={{uri: props.image}}/>
    //     </View>
    //   <View style={styles.details}>
    //     <Text/>
    //     <Text style={styles.title}>{props.title}</Text>
    //     <Text style={styles.price}>${props.price.toFixed(2)}</Text>
    //     </View>
    //   <View style={styles.actions}>
    //     <Button color ={Colors.primary}title='View Details' onPress={props.onViewDetail} />
    //     <Button color ={Colors.primary} title='To Cart' onPress={props.onAddToCart}/>
    //   </View>
    // </TouchableOpacity>
    // </View>
  )
}

export default Productitem

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
})

// const styles = StyleSheet.create({
//   product: {
//     shadowColor: 'black',
//     shadowOpacity: 0.26,
//     shadowOffset: {width: 0, height: 2},
//     shadowRadius: 8,
//     elevation: 5,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     height: 300,
//     margin: 20 ,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   title: {
//     fontFamily: '',
//     fontSize: 18,
//     marginVertical: 2,
//   },
//   details: {
//     alignItems: 'center',
//     height: '15%',
//     padding: 10,
//   },
//   price: {
//     fontFamily: 'serif',
//     fontSize: 14,
//     color: '#888',
//   },
//   imageContainer: {
//     width: '100%',
//     height: '60%',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     overflow: 'hidden',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '25%',
//     paddingHorizontal: 20,
//   }
// })