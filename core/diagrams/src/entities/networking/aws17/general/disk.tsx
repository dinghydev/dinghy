import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.disk;fillColor=#7D7C7C;gradientColor=none;',
  },
  _original_width: 61.5,
  _original_height: 64.5,
}

export function Disk(props: NodeProps) {
  return <Shape {...DISK} {...props} _style={extendStyle(DISK, props)} />
}
