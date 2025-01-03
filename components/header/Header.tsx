import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spacer from '../common/Spacer'
import { FaBell } from 'react-icons/fa'

const Header = () => {
  return (
    <View>
      <SafeAreaView>
        <View className='flex flex-row  justify-between items-center'>
            <View>
                <Text className='text-red-800 text-3xl'>Title</Text>
            </View>
            <View>
                <Text>Date</Text>
            </View>
            <View>
                <Pressable className='p-2 rounded-full bg-gray-500'>
                    <FaBell size={24} />
                </Pressable>
            </View>
        </View>
        <Spacer />

      </SafeAreaView>
    </View>
  )
}

export default Header