import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINE_CHART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.lineChart;strokeColor=none;strokeColor2=#666666;strokeColor3=#008cff;strokeColor4=#dddddd;',
  },
  _width: 400,
  _height: 200,
}

export function LineChart(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LINE_CHART)} />
}
