import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HALF_CIRCLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.half_circle',
  },
  _original_width: 100,
  _original_height: 50,
}

export function HalfCircle(props: DiagramNodeProps) {
  return (
    <Shape
      {...HALF_CIRCLE}
      {...props}
      _style={extendStyle(HALF_CIRCLE, props)}
    />
  )
}
