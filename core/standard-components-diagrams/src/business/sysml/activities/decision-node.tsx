import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DECISION_NODE = {
  _style: {
    entity:
      'shape=rhombus;html=1;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _width: 200,
  _height: 80,
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
