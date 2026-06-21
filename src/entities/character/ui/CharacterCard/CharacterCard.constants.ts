export const CHARACTER_CARD_IMAGE = {
  width: 300,
  height: 300,
  sizes: '(min-width: 1180px) 20vw, (min-width: 700px) 50vw, 100vw',
  loading: {
    priority: 'eager',
    regular: 'lazy',
  },
} as const;
