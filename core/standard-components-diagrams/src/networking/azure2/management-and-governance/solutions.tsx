import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOLUTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/solutions.svg;strokeColor=none;',
  _width: 64,
  _height: 64,
}

export function Solutions(props: DiagramNodeProps) {
  return <Shape {...SOLUTIONS} {...props} />
}
