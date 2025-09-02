import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_UPS5000_HV = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_ups5000_hv;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 45,
}

export function IbmUps5000Hv(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_UPS5000_HV}
      {...props}
      _style={extendStyle(IBM_UPS5000_HV, props)}
    />
  )
}
