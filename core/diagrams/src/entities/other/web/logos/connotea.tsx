import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNOTEA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.connotea',
  },
  _original_width: 81,
  _original_height: 82.60000000000001,
}

export function Connotea(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONNOTEA)} />
}
