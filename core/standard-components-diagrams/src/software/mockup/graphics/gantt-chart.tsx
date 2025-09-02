import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GANTT_CHART = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.graphics.rrect;rSize=0;strokeColor=#999999;',
  },
  _original_width: 0,
  _original_height: 300,
}

export function GanttChart(props: DiagramNodeProps) {
  return (
    <Shape
      {...GANTT_CHART}
      {...props}
      _style={extendStyle(GANTT_CHART, props)}
    />
  )
}
