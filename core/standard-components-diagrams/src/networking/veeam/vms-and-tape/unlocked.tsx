import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UNLOCKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.unlocked;',
  },
  _original_width: 41.6,
  _original_height: 34.8,
}

export function Unlocked(props: DiagramNodeProps) {
  return (
    <Shape {...UNLOCKED} {...props} _style={extendStyle(UNLOCKED, props)} />
  )
}
