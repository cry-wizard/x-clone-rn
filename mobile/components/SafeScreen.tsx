import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeScreen = ({children}:any) => {
    const insert = useSafeAreaInsets()
  return (
    <View style={{padding:insert.top, flex:1}}>
      {children}
    </View>
  )
}

export default SafeScreen