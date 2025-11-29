import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUDDYMARKS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.buddymarks',
  },
  _width: 79.4,
  _height: 57,
}

export function Buddymarks(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUDDYMARKS)} />
}
