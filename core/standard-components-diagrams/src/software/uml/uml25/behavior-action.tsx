import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BEHAVIOR_ACTION = {
  _style:
    'shape=mxgraph.uml25.behaviorAction;html=1;rounded=1;absoluteArcSize=1;arcSize=10;align=left;spacingLeft=5;whiteSpace=wrap;',
  _width: 190,
  _height: 60,
}

export function BehaviorAction(props: DiagramNodeProps) {
  return <Shape {...BEHAVIOR_ACTION} {...props} />
}
