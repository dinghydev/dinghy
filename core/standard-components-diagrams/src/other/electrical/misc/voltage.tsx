import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VOLTAGE = {
  _style:
    'labelPosition=right;align=left;shape=mxgraph.electrical.signal_sources.voltage;shadow=0;dashed=0;strokeWidth=1;fontSize=10;html=1;',
  _width: 10,
  _height: 70,
}

export function Voltage(props: DiagramNodeProps) {
  return <Shape {...VOLTAGE} {...props} />
}
