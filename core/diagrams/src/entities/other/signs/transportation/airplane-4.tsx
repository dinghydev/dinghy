import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIRPLANE_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 91,
  _original_height: 98,
}

export function Airplane4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AIRPLANE_4)} />
}
