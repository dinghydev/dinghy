import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOOP_ANTENNA_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.loop_antenna',
  },
  _original_width: 100,
  _original_height: 100,
}

export function LoopAntenna2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOOP_ANTENNA_2)} />
}
