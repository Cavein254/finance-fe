import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/header/Header'
import TopCard from '@/components/home/TopCard'

const Home = () => {
  return (
   <SafeAreaView>
    <Header />
    <TopCard />
   </SafeAreaView>
  )
}

export default Home