
import { CommonActions, NavigationProp } from '@react-navigation/native';
import { Button, Image, Text, View, YStack } from 'tamagui';
import { CartStore, useCartContext } from '../state/appState';

const OrderComplete = ({ navigation }: {
  navigation: NavigationProp<any>;
}) => {
  const { setCart } = useCartContext();
  const handleComplete = () => {
    setCart([])
    CartStore.clearAll()
    navigation.dispatch(
      CommonActions.reset({ routes: [{ name: 'HomeLayout' }] })
    )
  }

  return (
    <View f={1} bg='$white1' mb='$2'>
      <YStack f={3} opacity={50} jc="center" ai="center" gap="$2">
        <Image src={require('../public/logoGreen.png')} width={60} height={60} />
        <Text color='$colors.primary'>EatGreen</Text>
        <Text fontSize="$6" color="$colors.primary" mt='$4' fontWeight='bold' textAlign='center'>
          Thankyou !
        </Text>
        <Image src={require('../public/tickImage.png')} mt='$4' width={138} height={130} />
        <Text fontSize="$6" color="$colors.primary" fontWeight='bold' mt='$4' textAlign='center'>
          Order Placed Successfully !!!
        </Text>
        <Image src={require('../public/vectorpeople.png')} w={240} h={240} />
      </YStack>
      <Button onPress={() => handleComplete()} bg='$colors.primary' color='white' borderRadius='$8' h='$5' fontSize='$6' fontWeight='bold'>Back To Home</Button>
    </View>
  )
}

export default OrderComplete