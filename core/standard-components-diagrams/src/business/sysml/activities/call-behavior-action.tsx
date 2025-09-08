import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALL_BEHAVIOR_ACTION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.callBehAct;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 80,
}

export function CallBehaviorAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_BEHAVIOR_ACTION}
      {...props}
      _style={extendStyle(CALL_BEHAVIOR_ACTION, props)}
    />
  )
}
