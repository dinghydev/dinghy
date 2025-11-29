import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOKEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.token;',
  },
  _original_width: 41,
  _original_height: 52,
}

export function Token(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOKEN)} />
}
