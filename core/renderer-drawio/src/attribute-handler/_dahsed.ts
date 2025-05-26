export const _dashed = (fill: boolean) => {
  return {
    element: {
      style: {
        dashed: 1,
        ...(fill ? {} : { fillColor: 'none' }),
      },
    },
  }
}
