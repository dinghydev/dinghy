import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.locked;',
  },
  _width: 30.4,
  _height: 34.4,
}

export function Locked(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCKED)} />
}
