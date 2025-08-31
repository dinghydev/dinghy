import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TASKS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.tasks;',
  },
  _width: 36.8,
  _height: 50.8,
}

export function Tasks(props: DiagramNodeProps) {
  return <Shape {...TASKS} {...props} _style={extendStyle(TASKS, props)} />
}
