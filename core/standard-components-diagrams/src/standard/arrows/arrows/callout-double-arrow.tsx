import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALLOUT_DOUBLE_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.callout_double_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 50,
  _original_height: 97,
}

export function CalloutDoubleArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALLOUT_DOUBLE_ARROW}
      {...props}
      _style={extendStyle(CALLOUT_DOUBLE_ARROW, props)}
    />
  )
}
