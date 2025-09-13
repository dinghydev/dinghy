import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_IPS_4500_SENSOR = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ips_4500_sensor;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoIps4500Sensor(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_IPS_4500_SENSOR}
      {...props}
      _style={extendStyle(CISCO_IPS_4500_SENSOR, props)}
    />
  )
}
