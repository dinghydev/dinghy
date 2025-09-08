import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HUMAN_INTELLIGENCE_TASKS_HIT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.human_intelligence_tasks_hit;fillColor=#ACACAC;gradientColor=none;',
  },
  _original_width: 52.5,
  _original_height: 55.5,
}

export function HumanIntelligenceTasksHit(props: DiagramNodeProps) {
  return (
    <Shape
      {...HUMAN_INTELLIGENCE_TASKS_HIT}
      {...props}
      _style={extendStyle(HUMAN_INTELLIGENCE_TASKS_HIT, props)}
    />
  )
}
