import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IDENTITY_GOVERNANCE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Identity_Governance.svg;strokeColor=none;',
  _width: 64,
  _height: 64,
}

export function IdentityGovernance(props: DiagramNodeProps) {
  return <Shape {...IDENTITY_GOVERNANCE} {...props} />
}
