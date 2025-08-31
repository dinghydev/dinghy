import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_DATACENTER_INFINIBAND_SWITCH_36 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_datacenter_infiniband_switch_36;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function SunDatacenterInfinibandSwitch36(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_DATACENTER_INFINIBAND_SWITCH_36}
      {...props}
      _style={extendStyle(SUN_DATACENTER_INFINIBAND_SWITCH_36, props)}
    />
  )
}
