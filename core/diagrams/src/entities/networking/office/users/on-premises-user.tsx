import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ON_PREMISES_USER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.on_premises_user;',
  },
  _original_width: 49,
  _original_height: 59,
}

export function OnPremisesUser(props: NodeProps) {
  return (
    <Shape
      {...ON_PREMISES_USER}
      {...props}
      _style={extendStyle(ON_PREMISES_USER, props)}
    />
  )
}
