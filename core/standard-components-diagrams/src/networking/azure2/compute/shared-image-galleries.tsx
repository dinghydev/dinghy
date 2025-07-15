import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_IMAGE_GALLERIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Shared_Image_Galleries.svg;',
  _width: 64,
  _height: 64,
}

export function SharedImageGalleries(props: DiagramNodeProps) {
  return <Shape {...SHARED_IMAGE_GALLERIES} {...props} />
}
