import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.object;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 42,
  _original_height: 45,
}

export function Object(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OBJECT)} />
}
