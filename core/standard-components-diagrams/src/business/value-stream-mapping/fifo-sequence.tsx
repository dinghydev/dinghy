import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIFO_SEQUENCE = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.fifo_sequence_flow;pointerEvents=1;fontStyle=0;fontSize=20;align=center;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function FifoSequence(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIFO_SEQUENCE}
      {...props}
      _style={extendStyle(FIFO_SEQUENCE, props)}
    />
  )
}
