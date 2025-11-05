import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_USER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.mobile_user;',
  },
  _original_width: 59,
  _original_height: 56,
}

export function MobileUser(props: NodeProps) {
  return (
    <Shape
      {...MOBILE_USER}
      {...props}
      _style={extendStyle(MOBILE_USER, props)}
    />
  )
}
