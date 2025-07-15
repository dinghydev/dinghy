import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_MIRROR = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mirror;',
  _width: 60,
  _height: 59,
}

export function DatabaseMirror(props: DiagramNodeProps) {
  return <Shape {...DATABASE_MIRROR} {...props} />
}
