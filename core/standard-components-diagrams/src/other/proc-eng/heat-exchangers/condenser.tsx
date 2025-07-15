import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONDENSER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.condenser;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 80,
}

export function Condenser(props: DiagramNodeProps) {
  return <Shape {...CONDENSER} {...props} />
}
