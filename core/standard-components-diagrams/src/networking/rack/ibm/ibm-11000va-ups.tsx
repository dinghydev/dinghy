import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_11000VA_UPS = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_11000va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 75,
}

export function Ibm11000vaUps(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_11000VA_UPS}
      {...props}
      _style={extendStyle(IBM_11000VA_UPS, props)}
    />
  )
}
