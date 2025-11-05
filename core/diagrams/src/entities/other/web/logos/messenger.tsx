import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSENGER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.messenger',
  },
  _original_width: 82.60000000000001,
  _original_height: 76.80000000000001,
}

export function Messenger(props: NodeProps) {
  return (
    <Shape {...MESSENGER} {...props} _style={extendStyle(MESSENGER, props)} />
  )
}
