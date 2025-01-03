import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spacer from '../common/Spacer'
import { FaBell } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <View className='flex flex-col'>
        <View className='flex flex-row  justify-between items-center p-4'>
            <View>
                <Pressable className='p-2 rounded-full bg-gray-500'>
                <RxHamburgerMenu size={24}/>
                </Pressable>
            </View>
            <View>
                <Text className='text-3xl font-bold'>Home</Text>
            </View>
            <View>
                <Pressable className='p-2 rounded-full bg-gray-500'>
                    <FaBell size={24} />
                </Pressable>
            </View>
        </View>
        <Spacer />
    </View>
  )
}

export default Header