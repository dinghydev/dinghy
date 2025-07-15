import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_ORANGE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database;fillColor=#DA4026;',
  _width: 35,
  _height: 49,
}

export function DatabaseOrange(props: DiagramNodeProps) {
  return <Shape {...DATABASE_ORANGE} {...props} />
}
