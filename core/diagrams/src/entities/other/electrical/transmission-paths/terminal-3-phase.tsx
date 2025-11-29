import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_3_PHASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.terminal_3_phase;pointerEvents=1;',
  },
  _width: 43,
  _height: 10,
}

export function Terminal3Phase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINAL_3_PHASE)} />
}
