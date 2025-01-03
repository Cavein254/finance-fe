import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spacer from '../common/Spacer'

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
                <Text>Notification</Text>
            </View>
        </View>
        <Spacer />
        
      </SafeAreaView>
    </View>
  )
}

export default Header