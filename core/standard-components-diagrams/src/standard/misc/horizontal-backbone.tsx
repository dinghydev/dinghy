import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_BACKBONE = {
  _style: {
    entity:
      'line;strokeWidth=4;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;',
  },
  _width: 160,
  _height: 10,
}

export function HorizontalBackbone(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_BACKBONE}
      {...props}
      _style={extendStyle(HORIZONTAL_BACKBONE, props)}
    />
  )
}
