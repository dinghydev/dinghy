import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const METRICS_ADVISOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Metrics.svg;',
  _width: 64,
  _height: 68,
}

export function MetricsAdvisor(props: DiagramNodeProps) {
  return <Shape {...METRICS_ADVISOR} {...props} />
}
