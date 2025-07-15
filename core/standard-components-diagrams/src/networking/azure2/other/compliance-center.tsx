import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPLIANCE_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Compliance_Center.svg;',
  _width: 68,
  _height: 68,
}

export function ComplianceCenter(props: DiagramNodeProps) {
  return <Shape {...COMPLIANCE_CENTER} {...props} />
}
