import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_UPS10000 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_ups10000;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 89,
}

export function IbmUps10000(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_UPS10000}
      {...props}
      _style={extendStyle(IBM_UPS10000, props)}
    />
  )
}
