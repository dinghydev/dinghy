import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TASKS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.tasks;',
  },
  _width: 40,
  _height: 52,
}

export function Tasks(props: DiagramNodeProps) {
  return <Shape {...TASKS} {...props} _style={extendStyle(TASKS, props)} />
}
