import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_3000VA_UPS = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_3000va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 45,
}

export function Ibm3000vaUps(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IBM_3000VA_UPS)} />
}
