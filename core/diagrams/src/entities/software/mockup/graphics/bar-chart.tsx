import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_CHART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.barChart;strokeColor=none;strokeColor2=none;strokeColor3=#666666;fillColor2=#008cff;fillColor3=#dddddd;',
  },
  _width: 400,
  _height: 200,
}

export function BarChart(props: NodeProps) {
  return (
    <Shape {...BAR_CHART} {...props} _style={extendStyle(BAR_CHART, props)} />
  )
}
