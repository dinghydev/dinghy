import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COST_ANALYSIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Analysis.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 70,
}

export function CostAnalysis(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_ANALYSIS}
      {...props}
      _style={extendStyle(COST_ANALYSIS, props)}
    />
  )
}
