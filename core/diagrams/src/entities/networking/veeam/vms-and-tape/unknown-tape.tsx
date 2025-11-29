import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNKNOWN_TAPE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.unknown_tape;',
  },
  _original_width: 67.2,
  _original_height: 62.4,
}

export function UnknownTape(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UNKNOWN_TAPE)} />
}
