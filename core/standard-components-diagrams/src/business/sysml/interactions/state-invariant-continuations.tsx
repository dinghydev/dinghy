import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_INVARIANT_CONTINUATIONS = {
  _style:
    'html=1;shape=mxgraph.sysml.cont;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 220,
}

export function StateInvariantContinuations(props: DiagramNodeProps) {
  return (
    <Shape
      {...STATE_INVARIANT_CONTINUATIONS}
      {...props}
      _style={extendStyle(STATE_INVARIANT_CONTINUATIONS, props)}
    />
  )
}
