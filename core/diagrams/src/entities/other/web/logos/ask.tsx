import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ask;fillColor=#D22028;strokeColor=none',
  },
  _original_width: 68.60000000000001,
  _original_height: 50.6,
}

export function Ask(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ASK)} />
}
