import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_3000VA_UPS = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_3000va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 45,
}

export function Ibm3000vaUps(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_3000VA_UPS}
      {...props}
      _style={extendStyle(IBM_3000VA_UPS, props)}
    />
  )
}
