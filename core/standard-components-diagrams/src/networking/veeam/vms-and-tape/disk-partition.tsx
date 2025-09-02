import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISK_PARTITION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.disk_partition;',
  },
  _original_width: 57.2,
  _original_height: 57.2,
}

export function DiskPartition(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISK_PARTITION}
      {...props}
      _style={extendStyle(DISK_PARTITION, props)}
    />
  )
}
