import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRESHBUMP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.freshbump;fillColor=#C2D952;strokeColor=none',
  },
  _original_width: 71.2,
  _original_height: 76,
}

export function Freshbump(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FRESHBUMP)} />
}
