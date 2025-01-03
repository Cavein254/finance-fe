import { View, Text } from 'react-native'
import React from 'react'
import StockItem from './StockItem'

const StockList = () => {
  return (
    <View className='flex gap-2 px-4'>
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
    </View>
  )
}

export default StockList