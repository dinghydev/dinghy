export const _distribution = (distribution: string) => ({
  flags: {
    isDistributionHorizontal: distribution === 'even' ||
      distribution === 'horizontal',
    isDistributionVertical: distribution === 'even' ||
      distribution === 'vertical',
  },
})
