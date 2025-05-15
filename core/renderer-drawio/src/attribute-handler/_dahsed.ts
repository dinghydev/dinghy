export const _dashed = (fill: boolean) => {
  return {
    group: {
      style: {
        dashed: 1,
        ...(fill ? {} : { fillColor: 'none' }),
      },
    },
  }
}
