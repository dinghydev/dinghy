import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUBMACHINE_STATE = {
  _style: {
    entity: 'shape=mxgraph.sysml.submState;whiteSpace=wrap;align=center;',
  },
  _original_width: 0,
  _original_height: 120,
}

export function SubmachineState(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUBMACHINE_STATE}
      {...props}
      _style={extendStyle(SUBMACHINE_STATE, props)}
    />
  )
}
