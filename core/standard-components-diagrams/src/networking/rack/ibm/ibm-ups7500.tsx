import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_UPS7500 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_ups7500;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 89,
}

export function IbmUps7500(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_UPS7500}
      {...props}
      _style={extendStyle(IBM_UPS7500, props)}
    />
  )
}
