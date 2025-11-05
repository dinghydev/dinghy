import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_PARTITION_4 = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_partition_4.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 37,
}

export function DatabasePartition4(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_PARTITION_4}
      {...props}
      _style={extendStyle(DATABASE_PARTITION_4, props)}
    />
  )
}
