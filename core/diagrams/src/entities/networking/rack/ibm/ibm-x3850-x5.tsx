import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_X3850_X5 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_x3850_x5;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function IbmX3850X5(props: NodeProps) {
  return (
    <Shape
      {...IBM_X3850_X5}
      {...props}
      _style={extendStyle(IBM_X3850_X5, props)}
    />
  )
}
