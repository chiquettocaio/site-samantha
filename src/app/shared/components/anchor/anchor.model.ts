// Same names are possible due to different types, what
// causes them to be placed in different namespaces

export const AnchorVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
} as const

export type AnchorVariant = typeof AnchorVariant[keyof typeof AnchorVariant]

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top'
