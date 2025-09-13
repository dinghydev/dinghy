import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_X3755_M3 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_x3755_m3;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function IbmX3755M3(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_X3755_M3}
      {...props}
      _style={extendStyle(IBM_X3755_M3, props)}
    />
  )
}
