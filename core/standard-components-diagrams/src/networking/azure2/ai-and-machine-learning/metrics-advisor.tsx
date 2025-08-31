import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const METRICS_ADVISOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Metrics_Advisor.svg;strokeColor=none;',
  },
  _width: 54.800000000000004,
  _height: 68,
}

export function MetricsAdvisor(props: DiagramNodeProps) {
  return (
    <Shape
      {...METRICS_ADVISOR}
      {...props}
      _style={extendStyle(METRICS_ADVISOR, props)}
    />
  )
}
