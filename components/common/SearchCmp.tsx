import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchCmp = () => {
  return (
    <View>
      <input type="text" placeholder="Search..." className='pl-8 py-2 text-2xl font-bold' />
      <Pressable className='absolute  mt-2'>
      <FaSearch size={24} />
      </Pressable>
    </View>
  )
}

export default SearchCmp