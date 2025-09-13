import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_BACKBONE = {
  _style: {
    entity:
      'line;strokeWidth=4;direction=south;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;',
  },
  _width: 10,
  _height: 160,
}

export function VerticalBackbone(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_BACKBONE}
      {...props}
      _style={extendStyle(VERTICAL_BACKBONE, props)}
    />
  )
}
