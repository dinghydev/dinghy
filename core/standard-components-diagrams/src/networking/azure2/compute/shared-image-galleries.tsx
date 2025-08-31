import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_IMAGE_GALLERIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Shared_Image_Galleries.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function SharedImageGalleries(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_IMAGE_GALLERIES}
      {...props}
      _style={extendStyle(SHARED_IMAGE_GALLERIES, props)}
    />
  )
}
