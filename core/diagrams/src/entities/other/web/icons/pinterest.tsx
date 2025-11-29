import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PINTEREST = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.pinterest;fillColor=#E50B28;gradientColor=#890616',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Pinterest(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PINTEREST)} />
}
