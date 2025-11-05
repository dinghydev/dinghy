import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const R0X27A_ARUBA_CX_6410_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x27a_aruba_cx_6410_switch_rear;',
  },
  _width: 142,
  _height: 169,
}

export function R0x27aArubaCx6410SwitchRear(props: NodeProps) {
  return (
    <Shape
      {...R0X27A_ARUBA_CX_6410_SWITCH_REAR}
      {...props}
      _style={extendStyle(R0X27A_ARUBA_CX_6410_SWITCH_REAR, props)}
    />
  )
}
