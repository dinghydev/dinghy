import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPLIANCE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Compliance.svg;',
  _width: 52,
  _height: 64,
}

export function Compliance(props: DiagramNodeProps) {
  return <Shape {...COMPLIANCE} {...props} />
}
