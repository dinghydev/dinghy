import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_UPS5000_HV = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_ups5000_hv;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 45,
}

export function IbmUps5000Hv(props: NodeProps) {
  return (
    <Shape
      {...IBM_UPS5000_HV}
      {...props}
      _style={extendStyle(IBM_UPS5000_HV, props)}
    />
  )
}
