export const _width = (width: number) => (
  {
    flags: {
      isFixedWidth: true,
    },
    entity: {
      geometry: {
        width,
      },
    },
    container: {
      geometry: {
        width,
      },
    },
  }
)
