import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAMELIFT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.gamelift;fillColor=#AD688B;gradientColor=none;',
  },
  _original_width: 70.5,
  _original_height: 85.5,
}

export function Gamelift(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GAMELIFT)} />
}
