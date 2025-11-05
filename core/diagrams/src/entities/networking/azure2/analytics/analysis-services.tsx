import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANALYSIS_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Analysis_Services.svg;strokeColor=none;',
  },
  _original_width: 63,
  _original_height: 48,
}

export function AnalysisServices(props: NodeProps) {
  return (
    <Shape
      {...ANALYSIS_SERVICES}
      {...props}
      _style={extendStyle(ANALYSIS_SERVICES, props)}
    />
  )
}
