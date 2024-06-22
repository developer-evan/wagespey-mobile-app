import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Authlayout() {
  return (
    <Stack>
        <Stack.Screen name="signin" options=
       {{ headerShown: false }}  />
        <Stack.Screen name="signup" />
    </Stack>


   
  )
}