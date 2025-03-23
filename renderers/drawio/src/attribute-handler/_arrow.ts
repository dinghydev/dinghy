export const _arrow = (arrow: string) => {
  switch (arrow) {
    case 'start':
      return {
        dependency: {
          style: {
            startArrow: 'block',
            startFill: 1,
            endArrow: 'none',
            endFill: 0,
          },
        },
      }
    case 'both':
      return {
        dependency: {
          style: {
            startArrow: 'block',
            startFill: 1,
            endArrow: 'block',
            endFill: 1,
          },
        },
      }
    case 'none':
      return {
        dependency: {
          style: {
            startArrow: 'none',
            startFill: 0,
            endArrow: 'none',
            endFill: 0,
          },
        },
      }
    default:
      return {
        dependency: {
          style: {
            startArrow: 'none',
            startFill: 0,
            endArrow: 'block',
            endFill: 1,
          },
        },
      }
  }
}
