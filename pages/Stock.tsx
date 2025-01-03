import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/header/Header'
import SearchCmp from '@/components/common/SearchCmp'
import Spacer from '@/components/common/Spacer'
import StockList from '@/components/stock/StockList'

const Stock = () => {
  return (
    <View>
      <Header />
      <SearchCmp />
      <Spacer />
      <StockList />
    </View>
  )
}

export default Stock