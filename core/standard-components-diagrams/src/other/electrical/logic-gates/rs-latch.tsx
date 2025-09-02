import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RS_LATCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.rs_latch;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function RsLatch(props: DiagramNodeProps) {
  return (
    <Shape {...RS_LATCH} {...props} _style={extendStyle(RS_LATCH, props)} />
  )
}
