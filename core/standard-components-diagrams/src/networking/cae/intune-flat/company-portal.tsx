import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPANY_PORTAL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.company_portal',
  _width: 50,
  _height: 38,
}

export function CompanyPortal(props: DiagramNodeProps) {
  return <Shape {...COMPANY_PORTAL} {...props} />
}
