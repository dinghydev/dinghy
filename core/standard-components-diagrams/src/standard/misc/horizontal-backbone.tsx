import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_BACKBONE = {
  _style: {
    entity:
      'line;strokeWidth=4;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;',
  },
  _original_width: 160,
  _original_height: 10,
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
