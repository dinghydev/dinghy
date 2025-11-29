import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BEBO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.bebo;fillColor=#EC1C23;strokeColor=none',
  },
  _original_width: 55.800000000000004,
  _original_height: 71.4,
}

export function Bebo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BEBO)} />
}
