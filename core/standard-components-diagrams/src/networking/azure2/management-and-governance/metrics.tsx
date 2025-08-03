import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const METRICS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Metrics.svg;strokeColor=none;',
  _width: 60,
  _height: 65,
}

export function Metrics(props: DiagramNodeProps) {
  return <Shape {...METRICS} {...props} />
}
