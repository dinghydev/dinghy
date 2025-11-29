import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GANTT_CHART = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.graphics.rrect;rSize=0;strokeColor=#999999;',
  },
  _width: 0,
  _height: 300,
}

export function GanttChart(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GANTT_CHART)} />
}
