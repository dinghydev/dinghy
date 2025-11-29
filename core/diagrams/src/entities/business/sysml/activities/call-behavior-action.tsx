import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_BEHAVIOR_ACTION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.callBehAct;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function CallBehaviorAction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALL_BEHAVIOR_ACTION)} />
}
