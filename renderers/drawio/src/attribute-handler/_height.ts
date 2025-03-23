export const _height = (height: number) => (
  {
    flags: {
      isFixedHeight: true,
    },
    entity: {
      geometry: {
        height,
      },
    },
    group: {
      geometry: {
        height,
      },
    },
  }
)
