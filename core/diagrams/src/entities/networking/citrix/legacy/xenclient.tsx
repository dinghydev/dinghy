import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XENCLIENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenclient;',
  },
  _original_width: 91,
  _original_height: 77,
}

export function Xenclient(props: NodeProps) {
  return (
    <Shape {...XENCLIENT} {...props} _style={extendStyle(XENCLIENT, props)} />
  )
}
