import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIGNAL_IN_ARROW = {
  _style:
    'shape=mxgraph.arrows.signal-in_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 30,
}

export function SignalInArrow(props: DiagramNodeProps) {
  return <Shape {...SIGNAL_IN_ARROW} {...props} />
}
