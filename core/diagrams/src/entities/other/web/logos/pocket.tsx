import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POCKET = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.pocket;fillColor=#EE4056;strokeColor=none',
  },
  _original_width: 62.800000000000004,
  _original_height: 57.800000000000004,
}

export function Pocket(props: NodeProps) {
  return <Shape {...POCKET} {...props} _style={extendStyle(POCKET, props)} />
}
