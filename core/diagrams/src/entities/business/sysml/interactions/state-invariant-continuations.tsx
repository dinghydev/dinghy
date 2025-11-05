import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATE_INVARIANT_CONTINUATIONS = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.cont;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 1,
  _height: 220,
}

export function StateInvariantContinuations(props: NodeProps) {
  return (
    <Shape
      {...STATE_INVARIANT_CONTINUATIONS}
      {...props}
      _style={extendStyle(STATE_INVARIANT_CONTINUATIONS, props)}
    />
  )
}
