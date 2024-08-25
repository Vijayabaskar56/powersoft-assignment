import { LayoutGridIcon, Search } from 'lucide-react-native'
import React from 'react'
import { InputFrame, View, XStack } from 'tamagui'

const SearchBar = ({isExplore} : {
 isExplore: boolean;
}) => {
 return (
  <XStack f={1} justifyContent="flex-start" borderTopLeftRadius={'$6'} borderBottomLeftRadius={'$6'} h='$4' marginHorizontal='$3' alignItems="center" w={'$20'} borderWidth='$1'
   outlineWidth='$1' borderRightColor='$colorTransparent' outlineColor='$colors.primary' borderColor='$colors.primary'>
   <InputFrame
    paddingHorizontal='$3'
    placeholder='Search products'
    unstyled
    color='$gray11Light'
    placeholderTextColor='$gray11Light'
    w='100%'
   ></InputFrame>
   <View bg='$colors.primary' p='$2'  borderTopEndRadius='$4' borderBottomEndRadius={'$4'} >
    <Search size={31} color="white" style={{ backgroundColor: '#05a845', }} />
   </View>
   {
    isExplore &&
    <View ai='flex-end' ml='$3'>
     <LayoutGridIcon size={30} color='#05A845' fill='#05A845' />
    </View>
   }
  </XStack>
 )
}

export default SearchBar