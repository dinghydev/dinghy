import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_BACKBONE = {
  _style:
    'line;strokeWidth=4;direction=south;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;',
  _width: 10,
  _height: 160,
}

export function VerticalBackbone(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_BACKBONE} {...props} />
}
