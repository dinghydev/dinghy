import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BEHAVIOR_ACTION = {
  _style: {
    entity:
      'shape=mxgraph.uml25.behaviorAction;html=1;rounded=1;absoluteArcSize=1;arcSize=10;align=left;spacingLeft=5;whiteSpace=wrap;',
  },
  _original_width: 190,
  _original_height: 60,
}

export function BehaviorAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...BEHAVIOR_ACTION}
      {...props}
      _style={extendStyle(BEHAVIOR_ACTION, props)}
    />
  )
}
