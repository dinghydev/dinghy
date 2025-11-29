import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSENGER_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.messenger_2',
  },
  _original_width: 64.4,
  _original_height: 64.8,
}

export function Messenger2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSENGER_2)} />
}
