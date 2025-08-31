import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINE_CHART = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.lineChart;strokeColor=none;strokeColor2=#666666;strokeColor3=#008cff;strokeColor4=#dddddd;',
  _width: 400,
  _height: 200,
}

export function LineChart(props: DiagramNodeProps) {
  return (
    <Shape {...LINE_CHART} {...props} _style={extendStyle(LINE_CHART, props)} />
  )
}
