import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAMESPOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gamespot',
  },
  _original_width: 81.60000000000001,
  _original_height: 81.60000000000001,
}

export function Gamespot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GAMESPOT)} />
}
