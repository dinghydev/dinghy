import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCAL_DISK = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.local_disk;',
  },
  _original_width: 57.2,
  _original_height: 56.8,
}

export function LocalDisk(props: DiagramNodeProps) {
  return (
    <Shape {...LOCAL_DISK} {...props} _style={extendStyle(LOCAL_DISK, props)} />
  )
}
