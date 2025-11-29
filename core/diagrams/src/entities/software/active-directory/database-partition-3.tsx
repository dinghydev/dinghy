import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_PARTITION_3 = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_partition_3.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 37,
}

export function DatabasePartition3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_PARTITION_3)} />
}
