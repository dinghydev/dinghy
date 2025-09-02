import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APC_SMART_UPS_5000_VA_5U = {
  _style: {
    entity:
      'shape=mxgraph.rack.apc.apc_smart_ups_5000_va_5u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 74,
}

export function ApcSmartUps5000Va5u(props: DiagramNodeProps) {
  return (
    <Shape
      {...APC_SMART_UPS_5000_VA_5U}
      {...props}
      _style={extendStyle(APC_SMART_UPS_5000_VA_5U, props)}
    />
  )
}
