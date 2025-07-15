import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTCHED_SIGNAL_IN_ARROW = {
  _style:
    'shape=mxgraph.arrows.notched_signal-in_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 96,
  _height: 30,
}

export function NotchedSignalInArrow(props: DiagramNodeProps) {
  return <Shape {...NOTCHED_SIGNAL_IN_ARROW} {...props} />
}
