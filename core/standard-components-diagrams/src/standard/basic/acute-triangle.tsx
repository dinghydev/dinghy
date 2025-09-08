import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACUTE_TRIANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.acute_triangle;dx=0.5;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function AcuteTriangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACUTE_TRIANGLE}
      {...props}
      _style={extendStyle(ACUTE_TRIANGLE, props)}
    />
  )
}
