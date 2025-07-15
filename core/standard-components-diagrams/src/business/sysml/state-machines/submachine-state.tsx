import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUBMACHINE_STATE = {
  _style: 'shape=mxgraph.sysml.submState;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 120,
}

export function SubmachineState(props: DiagramNodeProps) {
  return <Shape {...SUBMACHINE_STATE} {...props} />
}
