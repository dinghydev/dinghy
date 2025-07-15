import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_MINI_ORANGE_3 = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_3;fillColor=#DA4026;',
  _width: 35,
  _height: 57,
}

export function DatabaseMiniOrange3(props: DiagramNodeProps) {
  return <Shape {...DATABASE_MINI_ORANGE_3} {...props} />
}
