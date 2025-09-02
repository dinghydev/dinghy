import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTITY_GOVERNANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Identity_Governance.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
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
