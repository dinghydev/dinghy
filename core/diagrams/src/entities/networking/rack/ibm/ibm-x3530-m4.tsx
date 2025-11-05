import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_X3530_M4 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_x3530_m4;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function IbmX3530M4(props: NodeProps) {
  return (
    <Shape
      {...IBM_X3530_M4}
      {...props}
      _style={extendStyle(IBM_X3530_M4, props)}
    />
  )
}
