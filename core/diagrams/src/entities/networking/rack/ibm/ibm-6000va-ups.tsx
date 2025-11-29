import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_6000VA_UPS = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_6000va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function Ibm6000vaUps(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IBM_6000VA_UPS)} />
}
