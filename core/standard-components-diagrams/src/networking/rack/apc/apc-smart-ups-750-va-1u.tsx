import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APC_SMART_UPS_750_VA_1U = {
  _style:
    'shape=mxgraph.rack.apc.apc_smart_ups_750_va_1u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function ApcSmartUps750Va1u(props: DiagramNodeProps) {
  return (
    <Shape
      {...APC_SMART_UPS_750_VA_1U}
      {...props}
      _style={extendStyle(APC_SMART_UPS_750_VA_1U, props)}
    />
  )
}
