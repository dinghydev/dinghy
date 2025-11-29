import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_UPS7500 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_ups7500;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 89,
}

export function IbmUps7500(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IBM_UPS7500)} />
}
