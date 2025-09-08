import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEREOTYPE_EDGE = {
  _style: {
    entity:
      'endArrow=none;html=1;edgeStyle=none;labelBackgroundColor=none;align=left;fontStyle=1;fontSize=10;',
  },
  _original_width: 2,
  _original_height: 180,
}

export function StereotypeEdge(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_EDGE}
      {...props}
      _style={extendStyle(STEREOTYPE_EDGE, props)}
    />
  )
}
