import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_DX360 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_dx360;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function IbmDx360(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IBM_DX360)} />
}
