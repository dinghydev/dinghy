export const simpleStyleAttribute = (key: string) => (value: unknown) => ({
  element: {
    style: {
      [key]: value,
    },
  },
})
