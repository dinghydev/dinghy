import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_NETWORK_10GBE_SWITCH_72P = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_network_10gbe_switch_72p;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function SunNetwork10gbeSwitch72p(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SUN_NETWORK_10GBE_SWITCH_72P)}
    />
  )
}
