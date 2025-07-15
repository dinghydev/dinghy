import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPENSATOR = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.compensator;',
  _width: 40,
  _height: 80,
}

export function Compensator(props: DiagramNodeProps) {
  return <Shape {...COMPENSATOR} {...props} />
}
