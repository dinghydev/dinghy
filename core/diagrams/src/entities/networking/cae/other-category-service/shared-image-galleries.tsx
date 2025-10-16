import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARED_IMAGE_GALLERIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Shared_Image_Galleries.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
