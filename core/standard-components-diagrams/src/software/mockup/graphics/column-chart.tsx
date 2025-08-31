import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLUMN_CHART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.columnChart;strokeColor=none;strokeColor2=none;strokeColor3=#666666;fillColor2=#008cff;fillColor3=#dddddd;',
  },
  _width: 400,
  _height: 200,
}

export function ColumnChart(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLUMN_CHART}
      {...props}
      _style={extendStyle(COLUMN_CHART, props)}
    />
  )
}
