import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOST_SPACE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.lost_space;',
  },
  _original_width: 44,
  _original_height: 60,
}

export function LostSpace(props: NodeProps) {
  return (
    <Shape {...LOST_SPACE} {...props} _style={extendStyle(LOST_SPACE, props)} />
  )
}
