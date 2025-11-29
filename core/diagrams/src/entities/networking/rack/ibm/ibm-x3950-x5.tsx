import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_X3950_X5 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_x3950_x5;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function IbmX3950X5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IBM_X3950_X5)} />
}
