// import { NavigationProp } from '@react-navigation/native';
// import React from 'react';
// import { Card, Text, View, XStack } from 'tamagui';

// const NavTabs = ({ color, title, icon, children, navigation }: { color: string, title: string, icon: string, children?: React.ReactNode, navigation: NavigationProp<any> }) => {

//  const path: { [key: string]: string } = {
//   "Payment": "payment",
//   "Wallet": "wallet",
//   "Saved Places": "saved-places",
//   "Preferred Language": "language",
//   "Manage Your Account": "manage-account",
//   "Privacy Policy": "privacy-policy",
//   "Support": "support",
//  } as const
//  return (
//   <Card
//    elevate
//    size="$4"
//    bordered
//    margin="$3"
//    animation="medium"
//    scale={0.9}
//    hoverStyle={{ scale: 0.925 }}
//    pressStyle={{ scale: 0.875 }}
//    borderRadius='$10'
//    onPress={() => navigation.navigate(`/account/${path[title]}`)}
//   >
//    <XStack
//     justifyContent="space-between"
//     alignItems="center"
//     padding="$1"
//    >
//     <View
//      backgroundColor={color}
//      padding="$3"
//      borderRadius="$10"
//      marginVertical="$2"
//      marginHorizontal="$3"
//     >
//      {icon === "logout" && <AntDesign name={icon} size={24} />}
//      {icon === "customerservice" && <AntDesign name={icon} size={24} />}
//      {icon !== "logout" && icon !== "customerservice" && <FontAwesome5 name={icon} size={24} color="black" />}
//     </View>
//     <View>
//      {children ? children :
//       <Text textAlign="left">{title}</Text>
//      }
//     </View>
//     <View
//      marginRight="$4"
//      padding="$2"
//      borderRadius="$10"
//     // backgroundColor="$borderColorFocus"
//     >
//      {children ? null :
//       (
//        path[title] ?
//         <Link href={`/account/${path[title]}`} >
//          <AntDesign name="right" size={24} color="#808080" />
//         </Link > : <AntDesign name="right" size={24} color="#808080" />
//       )
//      }
//     </View>
//    </XStack>
//   </Card >
//  );
// }


// export default NavTabs;
