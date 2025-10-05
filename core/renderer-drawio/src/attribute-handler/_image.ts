export const _image = (image: string) => (
  {
    entity: {
      style: {
        shape: 'image',
        verticalLabelPosition: 'bottom',
        verticalAlign: 'top',
        image,
      },
    },
  }
)
