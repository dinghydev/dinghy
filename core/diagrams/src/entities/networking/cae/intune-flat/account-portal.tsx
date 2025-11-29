import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCOUNT_PORTAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.account_portal',
  },
  _original_width: 43,
  _original_height: 50,
}

export function AccountPortal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACCOUNT_PORTAL)} />
}
