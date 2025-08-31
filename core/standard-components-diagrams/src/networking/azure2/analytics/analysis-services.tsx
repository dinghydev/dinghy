import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANALYSIS_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Analysis_Services.svg;strokeColor=none;',
  _width: 63,
  _height: 48,
}

export function AnalysisServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANALYSIS_SERVICES}
      {...props}
      _style={extendStyle(ANALYSIS_SERVICES, props)}
    />
  )
}
