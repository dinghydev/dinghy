import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_PARTITION = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_partition_2;',
  _width: 57,
  _height: 59,
}

export function DatabasePartition(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_PARTITION}
      {...props}
      _style={extendStyle(DATABASE_PARTITION, props)}
    />
  )
}
