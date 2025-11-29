import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FURNACE2 = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.furnace2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 100,
}

export function Furnace2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FURNACE2)} />
}
