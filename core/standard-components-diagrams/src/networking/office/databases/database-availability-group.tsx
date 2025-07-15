import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_AVAILABILITY_GROUP = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_availability_group;',
  _width: 59,
  _height: 59,
}

export function DatabaseAvailabilityGroup(props: DiagramNodeProps) {
  return <Shape {...DATABASE_AVAILABILITY_GROUP} {...props} />
}
