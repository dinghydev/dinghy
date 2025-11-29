import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STUMPEDIA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.stumpedia',
  },
  _original_width: 67,
  _original_height: 67.60000000000001,
}

export function Stumpedia(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STUMPEDIA)} />
}
