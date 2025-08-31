import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RDS_SLAVE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.rdsSlave;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 123,
  _height: 133,
}

export function RdsSlave(props: DiagramNodeProps) {
  return (
    <Shape {...RDS_SLAVE} {...props} _style={extendStyle(RDS_SLAVE, props)} />
  )
}
