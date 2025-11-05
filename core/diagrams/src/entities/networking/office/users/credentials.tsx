import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CREDENTIALS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.credentials;',
  },
  _original_width: 56,
  _original_height: 58,
}

export function Credentials(props: NodeProps) {
  return (
    <Shape
      {...CREDENTIALS}
      {...props}
      _style={extendStyle(CREDENTIALS, props)}
    />
  )
}
