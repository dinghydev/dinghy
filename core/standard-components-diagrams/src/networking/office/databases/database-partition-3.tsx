import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_PARTITION_3 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_partition_4;',
  },
  _original_width: 57,
  _original_height: 59,
}

export function DatabasePartition3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_PARTITION_3}
      {...props}
      _style={extendStyle(DATABASE_PARTITION_3, props)}
    />
  )
}
