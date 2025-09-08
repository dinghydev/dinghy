import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_PARTITION_2 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_partition_3;',
  },
  _original_width: 57,
  _original_height: 59,
}

export function DatabasePartition2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_PARTITION_2}
      {...props}
      _style={extendStyle(DATABASE_PARTITION_2, props)}
    />
  )
}
