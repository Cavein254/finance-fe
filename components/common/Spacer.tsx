import { View, Text } from 'react-native'
import React from 'react'

const Spacer = ({size}:{size?:number}) => {
  return (
    <View style={{ marginVertical: size ? size * 4 : 32 }} />
  )
}

export default Spacer