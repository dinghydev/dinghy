import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PINTEREST = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.pinterest;fillColor=#BD081C;strokeColor=none',
  },
  _original_width: 76.80000000000001,
  _original_height: 74.4,
}

export function Pinterest(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PINTEREST)} />
}
