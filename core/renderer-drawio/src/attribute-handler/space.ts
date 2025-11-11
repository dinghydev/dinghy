export const space = (key: string) => (value: unknown) => ({
  dimension: {
    [key]: value,
  },
})
