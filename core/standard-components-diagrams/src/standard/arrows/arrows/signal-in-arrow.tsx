import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.signal-in_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 30,
}

export function SignalInArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNAL_IN_ARROW}
      {...props}
      _style={extendStyle(SIGNAL_IN_ARROW, props)}
    />
  )
}
