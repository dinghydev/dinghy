import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APC_SMART_UPS_5000_VA_5U = {
  _style: {
    entity:
      'shape=mxgraph.rack.apc.apc_smart_ups_5000_va_5u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 74,
}

export function ApcSmartUps5000Va5u(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, APC_SMART_UPS_5000_VA_5U)} />
  )
}
