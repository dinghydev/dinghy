import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TASK = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs_task;',
  },
  _original_width: 37,
  _original_height: 48,
}

export function Task(props: DiagramNodeProps) {
  return <Shape {...TASK} {...props} _style={extendStyle(TASK, props)} />
}
