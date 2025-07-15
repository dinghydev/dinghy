import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Images.svg;',
  _width: 69,
  _height: 64,
}

export function Images(props: DiagramNodeProps) {
  return <Shape {...IMAGES} {...props} />
}
