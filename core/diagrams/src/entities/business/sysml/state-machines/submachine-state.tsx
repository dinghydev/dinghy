import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUBMACHINE_STATE = {
  _style: {
    entity: 'shape=mxgraph.sysml.submState;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 120,
}

export function SubmachineState(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUBMACHINE_STATE)} />
}
