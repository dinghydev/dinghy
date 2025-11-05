import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PAUSED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.paused;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function Paused(props: NodeProps) {
  return <Shape {...PAUSED} {...props} _style={extendStyle(PAUSED, props)} />
}
