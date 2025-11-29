import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FURNACE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.furnace;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 99,
}

export function Furnace(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FURNACE)} />
}
