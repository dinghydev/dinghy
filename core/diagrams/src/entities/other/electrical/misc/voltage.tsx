import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOLTAGE = {
  _style: {
    entity:
      'labelPosition=right;align=left;shape=mxgraph.electrical.signal_sources.voltage;shadow=0;dashed=0;strokeWidth=1;fontSize=10;html=1;',
  },
  _width: 10,
  _height: 70,
}

export function Voltage(props: NodeProps) {
  return <Shape {...VOLTAGE} {...props} _style={extendStyle(VOLTAGE, props)} />
}
