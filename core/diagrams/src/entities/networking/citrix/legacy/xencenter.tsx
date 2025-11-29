import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XENCENTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xencenter;',
  },
  _original_width: 76,
  _original_height: 89,
}

export function Xencenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, XENCENTER)} />
}
