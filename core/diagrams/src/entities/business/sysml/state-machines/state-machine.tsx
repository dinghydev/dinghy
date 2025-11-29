import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATE_MACHINE = {
  _style: {
    entity:
      'shape=mxgraph.sysml.stateMachine;verticalAlign=top;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 120,
}

export function StateMachine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STATE_MACHINE)} />
}
