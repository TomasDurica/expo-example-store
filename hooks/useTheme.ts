﻿const primary = {
  '0': '#000000',
  '5': '#001411',
  '10': '#00201C',
  '15': '#002C26',
  '20': '#003731',
  '25': '#00443C',
  '30': '#005048',
  '35': '#005D53',
  '40': '#006B5F',
  '50': '#008678',
  '60': '#00A392',
  '70': '#25BFAD',
  '80': '#4FDBC8',
  '90': '#92F4E3',
  '95': '#B4FFF1',
  '98': '#E5FFF9',
  '99': '#F2FFFB',
  '100': '#FFFFFF'
}

const secondary = {
  '0': '#000000',
  '5': '#001411',
  '10': '#05201C',
  '15': '#102A26',
  '20': '#1B3531',
  '25': '#27403C',
  '30': '#324C47',
  '35': '#3E5752',
  '40': '#4A635E',
  '50': '#627C77',
  '60': '#7B9690',
  '70': '#95B1AB',
  '80': '#B0CCC6',
  '90': '#CCE9E2',
  '95': '#DAF7F0',
  '98': '#E5FFF9',
  '99': '#F2FFFB',
  '100': '#FFFFFF'
}

const tertiary = {
  '0': '#000000',
  '5': '#001221',
  '10': '#001E31',
  '15': '#05283E',
  '20': '#133349',
  '25': '#203E55',
  '30': '#2C4A61',
  '35': '#38556D',
  '40': '#44617A',
  '50': '#5D7A94',
  '60': '#7794AE',
  '70': '#91AFCA',
  '80': '#ACCAE6',
  '90': '#CBE6FF',
  '95': '#E7F2FF',
  '98': '#F7F9FF',
  '99': '#FCFCFF',
  '100': '#FFFFFF'
}

const neutral = {
  '0': '#000000',
  '5': '#0E1211',
  '10': '#191C1B',
  '15': '#232625',
  '20': '#2D3130',
  '25': '#383C3B',
  '30': '#444746',
  '35': '#505352',
  '40': '#5C5F5E',
  '50': '#747876',
  '60': '#8E9190',
  '70': '#A9ACAA',
  '80': '#C4C7C5',
  '90': '#E0E3E1',
  '95': '#EFF1EF',
  '98': '#F7FAF8',
  '99': '#FAFDFB',
  '100': '#FFFFFF'
}

const neutralVariant = {
  '0': '#000000',
  '5': '#091311',
  '10': '#141D1C',
  '15': '#1E2826',
  '20': '#293230',
  '25': '#343D3B',
  '30': '#3F4946',
  '35': '#4B5452',
  '40': '#56605E',
  '50': '#6F7976',
  '60': '#899390',
  '70': '#A3ADAA',
  '80': '#BEC9C5',
  '90': '#DAE5E1',
  '95': '#E9F3EF',
  '98': '#F1FCF8',
  '99': '#F4FFFB',
  '100': '#FFFFFF'
}

const theme = {
  colors: {
    primary: '#82D5C7',
    surfaceTint: '#82D5C7',
    onPrimary: '#003731',
    primaryContainer: '#005048',
    onPrimaryContainer: '#9EF2E3',
    secondary: '#B1CCC6',
    onSecondary: '#1C3531',
    secondaryContainer: '#334B47',
    onSecondaryContainer: '#CCE8E2',
    tertiary: '#ADCAE5',
    onTertiary: '#143349',
    tertiaryContainer: '#2D4960',
    onTertiaryContainer: '#CBE6FF',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#0E1513',
    onBackground: '#DDE4E1',
    surface: '#0E1513',
    onSurface: '#DDE4E1',
    surfaceVariant: '#3F4946',
    onSurfaceVariant: '#BEC9C5',
    outline: '#899390',
    outlineVariant: '#3F4946',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#DDE4E1',
    inverseOnSurface: '#2B3230',
    inversePrimary: '#006B5F',
    primaryFixed: '#9EF2E3',
    onPrimaryFixed: '#00201C',
    primaryFixedDim: '#82D5C7',
    onPrimaryFixedVariant: '#005048',
    secondaryFixed: '#CCE8E2',
    onSecondaryFixed: '#06201C',
    secondaryFixedDim: '#B1CCC6',
    onSecondaryFixedVariant: '#334B47',
    tertiaryFixed: '#CBE6FF',
    onTertiaryFixed: '#001E31',
    tertiaryFixedDim: '#ADCAE5',
    onTertiaryFixedVariant: '#2D4960',
    surfaceDim: '#0E1513',
    surfaceBright: '#343B39',
    surfaceContainerLowest: '#090F0E',
    surfaceContainerLow: '#161D1B',
    surfaceContainer: '#1A211F',
    surfaceContainerHigh: '#252B2A',
    surfaceContainerHighest: '#303634',
    imageBackground: '#ffffff',
  },
  palettes: {
    primary,
    secondary,
    tertiary,
    neutral,
    neutralVariant
  }
}

export const useTheme = () => {
  return theme
}