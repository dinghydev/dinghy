import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TURBINE = {
  _style:
    'shape=mxgraph.pid.pumps.turbine;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 98,
  _height: 60,
}

export function Turbine(props: DiagramNodeProps) {
  return <Shape {...TURBINE} {...props} />
}
