import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOKEN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.token;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 59,
  _original_height: 61,
}

export function Token(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOKEN)} />
}
