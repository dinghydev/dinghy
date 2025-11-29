import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOOP_ANTENNA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.loop_antenna;',
  },
  _original_width: 64.8,
  _original_height: 69.78,
}

export function LoopAntenna(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOOP_ANTENNA)} />
}
