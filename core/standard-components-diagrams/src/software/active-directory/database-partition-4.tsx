import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_PARTITION_4 = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_partition_4.svg;',
  _width: 50,
  _height: 37,
}

export function DatabasePartition4(props: DiagramNodeProps) {
  return <Shape {...DATABASE_PARTITION_4} {...props} />
}
