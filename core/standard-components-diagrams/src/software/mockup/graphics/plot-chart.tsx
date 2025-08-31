import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLOT_CHART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.plotChart;strokeColor=none;strokeColor2=#aaaaaa;strokeColor3=#666666;fillColor2=#99aaff,#0022ff,#008cff;',
  },
  _width: 400,
  _height: 200,
}

export function PlotChart(props: DiagramNodeProps) {
  return (
    <Shape {...PLOT_CHART} {...props} _style={extendStyle(PLOT_CHART, props)} />
  )
}
