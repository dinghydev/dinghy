import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSIGNMENT_TASK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.assignment_task;fillColor=#ACACAC;gradientColor=none;',
  },
  _width: 46.5,
  _height: 63,
}

export function AssignmentTask(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSIGNMENT_TASK}
      {...props}
      _style={extendStyle(ASSIGNMENT_TASK, props)}
    />
  )
}
