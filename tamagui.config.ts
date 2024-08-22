import { createTamagui } from '@tamagui/core';
import * as themes from './theme';
import config from '@tamagui/config/v3';

const tamaguiConfig = createTamagui({
  ...config.config,
  themes,
  tokens: {
    ...config.tokens,
    colors: {
      ...config.tokens.color,
      primary: '#05a846',
      primacyTransparent: 'hsl(141, 72%, 37%, 0.3)',
      secondary: '#05A845',
      accent: '#05A845',
      background: '#FFFFFF',
      surface: '#FFFFFF',
      error: '#B00020',
      onPrimary: '#000000',
      onSecondary: '#FFFFFF',
      onBackground: '#000000',
      onSurface: '#000000',
      onError: '#FFFFFF',
    },
  },
});
export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}
