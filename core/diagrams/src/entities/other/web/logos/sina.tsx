import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sina',
  },
  _original_width: 85.80000000000001,
  _original_height: 68.60000000000001,
}

export function Sina(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SINA)} />
}
