import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_IMAGE_GALLERIES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Shared_Image_Galleries.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function SharedImageGalleries(props: DiagramNodeProps) {
  return <Shape {...SHARED_IMAGE_GALLERIES} {...props} />
}
