import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_X3550_M4 = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_x3550_m4;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function IbmX3550M4(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_X3550_M4}
      {...props}
      _style={extendStyle(IBM_X3550_M4, props)}
    />
  )
}
