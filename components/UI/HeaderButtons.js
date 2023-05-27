import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';


import Colors from '../../constants/Color'


const HeaderButtons = (props) => {

  return <HeaderButton {...props} IconComponent={""} iconSize={23} color={Colors.primary} />
  // <AntDesign name="shoppingcart" size={24} color="black" />
}

export default HeaderButtons

const styles = StyleSheet.create({})