import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_PARTITION_2 = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_partition_2.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 37,
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
