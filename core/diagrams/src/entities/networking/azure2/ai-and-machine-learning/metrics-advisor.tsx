import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const METRICS_ADVISOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Metrics_Advisor.svg;strokeColor=none;',
  },
  _original_width: 54.800000000000004,
  _original_height: 68,
}

export function MetricsAdvisor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, METRICS_ADVISOR)} />
}
