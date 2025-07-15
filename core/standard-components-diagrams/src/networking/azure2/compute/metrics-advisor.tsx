import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const METRICS_ADVISOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Metrics_Advisor.svg;',
  _width: 54.800000000000004,
  _height: 68,
}

export function MetricsAdvisor(props: DiagramNodeProps) {
  return <Shape {...METRICS_ADVISOR} {...props} />
}
