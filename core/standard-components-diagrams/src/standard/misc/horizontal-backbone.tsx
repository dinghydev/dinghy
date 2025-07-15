import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_BACKBONE = {
  _style:
    'line;strokeWidth=4;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;',
  _width: 160,
  _height: 10,
}

export function HorizontalBackbone(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_BACKBONE} {...props} />
}
