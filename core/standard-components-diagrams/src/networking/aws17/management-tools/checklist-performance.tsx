import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKLIST_PERFORMANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_performance;fillColor=#759C3E;gradientColor=none;',
  _width: 61.5,
  _height: 73.5,
}

export function ChecklistPerformance(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKLIST_PERFORMANCE}
      {...props}
      _style={extendStyle(CHECKLIST_PERFORMANCE, props)}
    />
  )
}
