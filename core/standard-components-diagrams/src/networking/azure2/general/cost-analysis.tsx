import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COST_ANALYSIS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Analysis.svg;',
  _width: 60,
  _height: 70,
}

export function CostAnalysis(props: DiagramNodeProps) {
  return <Shape {...COST_ANALYSIS} {...props} />
}
