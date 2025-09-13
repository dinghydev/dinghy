import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_X3630_M4 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_x3630_m4;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function IbmX3630M4(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_X3630_M4}
      {...props}
      _style={extendStyle(IBM_X3630_M4, props)}
    />
  )
}
