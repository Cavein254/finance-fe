import { View, Text } from 'react-native'
import React from 'react'

const StockItem = () => {
  return (
    <View className='flex justify-between items-center'>
     <View>
         <Text className='font-bold text-3xl uppercase'>DOW J</Text>
         <Text className='text-xs font-bold'>Down Jones Industrial</Text>
     </View>
     <View className='flex-1'></View>
     <View>
            <Text className='font-bold text-3xl'>34,382.13</Text>
            <Text className='text-xs font-bold text-green-500'>+0.44%</Text>
     </View>
    </View>
  )
}

export default StockItem