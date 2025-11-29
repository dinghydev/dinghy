import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SNOWBALL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.snowball;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function Snowball(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SNOWBALL)} />
}
