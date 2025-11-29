import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YOUMOB = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youmob',
  },
  _original_width: 76,
  _original_height: 76.2,
}

export function Youmob(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, YOUMOB)} />
}
