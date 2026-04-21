import { View, Text } from 'react-native'
import React from 'react'
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView); //SafeAreaView is a third-party component, so nativewind needs style wrapper to enable classname support on it.


const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default Settings