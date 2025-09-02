import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TASK_QUEUES = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.task_queues_2',
  },
  _original_width: 100,
  _original_height: 61,
}

export function TaskQueues(props: DiagramNodeProps) {
  return (
    <Shape
      {...TASK_QUEUES}
      {...props}
      _style={extendStyle(TASK_QUEUES, props)}
    />
  )
}
