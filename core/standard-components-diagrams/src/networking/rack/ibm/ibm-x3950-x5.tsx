import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_X3950_X5 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_x3950_x5;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function IbmX3950X5(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_X3950_X5}
      {...props}
      _style={extendStyle(IBM_X3950_X5, props)}
    />
  )
}
