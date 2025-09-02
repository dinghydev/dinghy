import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANALYSIS_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Analysis_Services.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 39,
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
