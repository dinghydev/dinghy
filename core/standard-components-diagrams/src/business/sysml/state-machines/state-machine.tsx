import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_MACHINE = {
  _style:
    'shape=mxgraph.sysml.stateMachine;verticalAlign=top;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 120,
}

export function StateMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...STATE_MACHINE}
      {...props}
      _style={extendStyle(STATE_MACHINE, props)}
    />
  )
}
