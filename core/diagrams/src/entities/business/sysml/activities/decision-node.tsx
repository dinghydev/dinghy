import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DECISION_NODE = {
  _style: {
    entity:
      'shape=rhombus;html=1;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _width: 200,
  _height: 80,
}

export function DecisionNode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DECISION_NODE)} />
}
