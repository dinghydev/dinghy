import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IDENTITY_GOVERNANCE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Identity_Governance.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IdentityGovernance(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTITY_GOVERNANCE}
      {...props}
      _style={extendStyle(IDENTITY_GOVERNANCE, props)}
    />
  )
}
