import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTITY_GOVERNANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Identity_Governance.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function IdentityGovernance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IDENTITY_GOVERNANCE)} />
}
