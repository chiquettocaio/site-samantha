// Same names are possible due to different types, what
// causes them to be placed in different namespaces

export const ButtonVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
} as const

export type ButtonVariant = typeof ButtonVariant[keyof typeof ButtonVariant]
