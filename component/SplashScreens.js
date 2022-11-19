import { Box, HStack, Image, Text } from 'native-base'
import React from 'react'
import { useEffect } from 'react'

export default function SplashScreens({navigation}) {
    useEffect (()=>{
        setTimeout(()=>{
            navigation.navigate("Home")
        
        },10000)
    })
  return (
      
      <Box alignItems="center" marginTop={300}>
      <HStack alignItems="center">
      <Text style={{ color: "black", marginEnd: 10, fontSize: 35 }}>Ways</Text>
      <Text style={{ color: "#B82020", fontSize: 35 }}>To</Text>
      <Text style={{ color: "#FF5555", fontSize: 35 }}>Do</Text>
      </HStack>
      <HStack>
      <Text>suport by </Text> <Text  style={{color: "red"}} >DumbWays </Text> <Text>tercinta</Text>
      </HStack>
      </Box>
  );
}
