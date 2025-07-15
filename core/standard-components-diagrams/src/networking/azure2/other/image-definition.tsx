import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_DEFINITION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Image_Definition.svg;',
  _width: 68,
  _height: 64,
}

export function ImageDefinition(props: DiagramNodeProps) {
  return <Shape {...IMAGE_DEFINITION} {...props} />
}
