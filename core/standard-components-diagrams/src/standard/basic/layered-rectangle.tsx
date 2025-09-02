import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAYERED_RECTANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.layered_rect;dx=10;outlineConnect=0;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function LayeredRectangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAYERED_RECTANGLE}
      {...props}
      _style={extendStyle(LAYERED_RECTANGLE, props)}
    />
  )
}
