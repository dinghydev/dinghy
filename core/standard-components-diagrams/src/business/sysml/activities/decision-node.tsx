import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DECISION_NODE = {
  _style: {
    entity:
      'shape=rhombus;html=1;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _original_width: 200,
  _original_height: 80,
}

export function DecisionNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...DECISION_NODE}
      {...props}
      _style={extendStyle(DECISION_NODE, props)}
    />
  )
}
