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
    container: {
      geometry: {
        height,
      },
    },
  }
)
