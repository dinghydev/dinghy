import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APC_SMART_UPS_1000_3000_VA_2U = {
  _style: {
    entity:
      'shape=mxgraph.rack.apc.apc_smart_ups_1000-3000_va_2u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function ApcSmartUps10003000Va2u(props: DiagramNodeProps) {
  return (
    <Shape
      {...APC_SMART_UPS_1000_3000_VA_2U}
      {...props}
      _style={extendStyle(APC_SMART_UPS_1000_3000_VA_2U, props)}
    />
  )
}
