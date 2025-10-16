import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const METRICS_ADVISOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Metrics.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
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
