import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORKEDBLOGS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.networkedblogs',
  },
  _original_width: 78.80000000000001,
  _original_height: 78.80000000000001,
}

export function Networkedblogs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORKEDBLOGS)} />
}
