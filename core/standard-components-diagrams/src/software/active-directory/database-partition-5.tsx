import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_PARTITION_5 = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_partition_5.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 37,
}

export function DatabasePartition5(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_PARTITION_5}
      {...props}
      _style={extendStyle(DATABASE_PARTITION_5, props)}
    />
  )
}
