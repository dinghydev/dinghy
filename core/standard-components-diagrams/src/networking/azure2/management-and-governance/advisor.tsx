import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADVISOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Advisor.svg;',
  _width: 66,
  _height: 64,
}

export function Advisor(props: DiagramNodeProps) {
  return <Shape {...ADVISOR} {...props} />
}
