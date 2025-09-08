import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.locked;',
  },
  _original_width: 30.4,
  _original_height: 34.4,
}

export function Locked(props: DiagramNodeProps) {
  return <Shape {...LOCKED} {...props} _style={extendStyle(LOCKED, props)} />
}
