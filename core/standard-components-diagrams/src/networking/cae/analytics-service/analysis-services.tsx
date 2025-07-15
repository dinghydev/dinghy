import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANALYSIS_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Analysis_Services.svg;',
  _width: 50,
  _height: 39,
}

export function AnalysisServices(props: DiagramNodeProps) {
  return <Shape {...ANALYSIS_SERVICES} {...props} />
}
