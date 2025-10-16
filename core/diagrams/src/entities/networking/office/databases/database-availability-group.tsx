import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_AVAILABILITY_GROUP = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_availability_group;',
  },
  _original_width: 59,
  _original_height: 59,
}

export function DatabaseAvailabilityGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_AVAILABILITY_GROUP}
      {...props}
      _style={extendStyle(DATABASE_AVAILABILITY_GROUP, props)}
    />
  )
}
