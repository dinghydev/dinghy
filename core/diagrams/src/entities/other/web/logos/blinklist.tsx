import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLINKLIST = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.blinklist;fillColor=#3A3333;strokeColor=none',
  },
  _original_width: 81.2,
  _original_height: 72,
}

export function Blinklist(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BLINKLIST)} />
}
