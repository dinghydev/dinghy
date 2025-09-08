import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_6000VA_UPS = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_6000va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 60,
}

export function Ibm6000vaUps(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_6000VA_UPS}
      {...props}
      _style={extendStyle(IBM_6000VA_UPS, props)}
    />
  )
}
