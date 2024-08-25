import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Paragraph, Separator, Text, View, XStack, YStack } from 'tamagui';
import { SessionStore, useSession } from '../state/sessionState';

const SearchScreen = ({ navigation }: {
  navigation: NavigationProp<any>;
}) => {
  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  const { session, setSession } = useSession();

  const handleLogOut = () => {
    SessionStore.clearAll();
    setSession(null);
    navigation.navigate('SignIn');
  }

  return (
    <View f={1} bg='$white1'>
      <View
        height="$19"
        justifyContent="center"
        alignItems="center"
        gap='$3'
        f={0.4}
      >
        <XStack alignItems="center" >
          <Avatar circular size="$10"
          >
            <Avatar.Image
              loadingIndicatorSource={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
              accessibilityLabel="Cam"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </XStack>
        <Text color='black' fontSize='$7'>{session?.email ?? ""}</Text>
        <Button onPress={() => handleLogOut()} variant='outlined' color='black' borderColor='black' borderRadius='$size.19' h='$3' fontSize='$6' fontWeight='bold'>
          <Text color='black'>LogOut</Text>
        </Button>
      </View>
      <Separator bg='$colors.primary' />
      <View ai='center' f={0.5} jc='space-between'>
        <Text color='black'>Assignment By</Text>
        <Text color='black' fontSize='$7'>VIJAYA BASKAR R</Text>
        <Paragraph color='black' fontSize='$5' paddingHorizontal='$5' textAlign='justify'>
          Aspiring young software developer with a passion for
          creating outstanding products since early beginnings.
          Brings a tech-driven journey to any team, seamlessly fitting into collaborative environments with a friendly demeanor and strong communication skills. Known for
          adaptability, problem-solving abilities, and a collaborative spirit. A dedicated team player who thrives on engaging in deep, insightful technical discussions.
        </Paragraph>
        <Card jc='space-between' backgroundColor='white' padded elevate>
          <XStack w='$20' jc='space-between'>
            <YStack jc='space-between' ai='flex-start' >
              <Text fontSize='$5' color='black'>PortFolio</Text>
              <Text fontSize='$5' color='black'>Blog</Text>
              <Text fontSize='$5' color='black'>GitHub</Text>
            </YStack>
            <YStack jc='space-between' ai='flex-start' >
              <TouchableOpacity onPress={() => handlePress('https://vijayabaskar.xyz')}>
                <Text fontSize='$5' color='$colors.primary'>vijayabaskar.xyz</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('https://blog.vijayabaskar.xyz')}>
                <Text fontSize='$5' color='$colors.primary'>blog.vijayabaskar.xyz</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress('https://github.com/Vijayabaskar56')}>
                <Text fontSize='$5' color='$colors.primary'>github.com/Vijayabaskar56</Text>
              </TouchableOpacity>
            </YStack>
          </XStack>
        </Card>
      </View>
    </View>
  );
};

export default SearchScreen;
