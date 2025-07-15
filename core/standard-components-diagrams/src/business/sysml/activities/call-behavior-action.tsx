import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALL_BEHAVIOR_ACTION = {
  _style: 'html=1;shape=mxgraph.sysml.callBehAct;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function CallBehaviorAction(props: DiagramNodeProps) {
  return <Shape {...CALL_BEHAVIOR_ACTION} {...props} />
}
