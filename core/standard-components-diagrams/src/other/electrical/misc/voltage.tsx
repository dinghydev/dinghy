import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLTAGE = {
  _style:
    'labelPosition=right;align=left;shape=mxgraph.electrical.signal_sources.voltage;shadow=0;dashed=0;strokeWidth=1;fontSize=10;html=1;',
  _width: 10,
  _height: 70,
}

export function Voltage(props: DiagramNodeProps) {
  return <Shape {...VOLTAGE} {...props} _style={extendStyle(VOLTAGE, props)} />
}
