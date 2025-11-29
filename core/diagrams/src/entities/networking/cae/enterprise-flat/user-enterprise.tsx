import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_ENTERPRISE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.user',
  },
  _original_width: 47,
  _original_height: 50,
}

export function UserEnterprise(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_ENTERPRISE)} />
}
