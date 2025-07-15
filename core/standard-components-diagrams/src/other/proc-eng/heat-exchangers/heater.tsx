import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEATER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.heater;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 80,
}

export function Heater(props: DiagramNodeProps) {
  return <Shape {...HEATER} {...props} />
}
