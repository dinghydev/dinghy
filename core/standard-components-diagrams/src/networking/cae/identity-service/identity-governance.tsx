import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IDENTITY_GOVERNANCE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Identity_Governance.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function IdentityGovernance(props: DiagramNodeProps) {
  return <Shape {...IDENTITY_GOVERNANCE} {...props} />
}
