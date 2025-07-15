import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RS_LATCH_SYNCHRONOUS = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.synchronous_rs_latch;',
  _width: 100,
  _height: 80,
}

export function RsLatchSynchronous(props: DiagramNodeProps) {
  return <Shape {...RS_LATCH_SYNCHRONOUS} {...props} />
}
