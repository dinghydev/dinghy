import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_DEFINITIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Image_Definitions.svg;strokeColor=none;',
  _width: 66,
  _height: 64,
}

export function ImageDefinitions(props: DiagramNodeProps) {
  return <Shape {...IMAGE_DEFINITIONS} {...props} />
}
