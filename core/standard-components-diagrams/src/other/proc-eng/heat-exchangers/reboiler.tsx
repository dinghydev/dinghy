import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REBOILER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.reboiler;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 91,
  _height: 33,
}

export function Reboiler(props: DiagramNodeProps) {
  return <Shape {...REBOILER} {...props} />
}
