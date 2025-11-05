import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOST_SPACE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.lost_space;',
  },
  _original_width: 43.2,
  _original_height: 44.4,
}

export function LostSpace(props: NodeProps) {
  return (
    <Shape {...LOST_SPACE} {...props} _style={extendStyle(LOST_SPACE, props)} />
  )
}
