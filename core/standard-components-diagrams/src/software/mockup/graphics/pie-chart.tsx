import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIE_CHART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.pieChart;strokeColor=#008cff;parts=10,20,35;partColors=#e0e0e0,#d0d0d0,#c0c0c0,#b0b0b0,#a0a0a0;strokeWidth=2;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function PieChart(props: DiagramNodeProps) {
  return (
    <Shape {...PIE_CHART} {...props} _style={extendStyle(PIE_CHART, props)} />
  )
}
