import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_X3690 = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_x3690;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function IbmX3690(props: DiagramNodeProps) {
  return (
    <Shape {...IBM_X3690} {...props} _style={extendStyle(IBM_X3690, props)} />
  )
}
