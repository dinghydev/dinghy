import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALLOUT_DOUBLE_ARROW = {
  _style:
    'shape=mxgraph.arrows.callout_double_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 50,
  _height: 97,
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
