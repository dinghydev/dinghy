import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUBBLE_CHART = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.bubbleChart;strokeColor=none;strokeColor2=none;strokeColor3=#666666;fillColor2=#008cff;fillColor3=#dddddd;',
  _width: 400,
  _height: 200,
}

export function BubbleChart(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUBBLE_CHART}
      {...props}
      _style={extendStyle(BUBBLE_CHART, props)}
    />
  )
}
