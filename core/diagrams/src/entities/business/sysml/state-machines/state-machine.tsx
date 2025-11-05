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
  return (
    <Shape
      {...STATE_MACHINE}
      {...props}
      _style={extendStyle(STATE_MACHINE, props)}
    />
  )
}
