import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIRPLANE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 98,
}

export function Airplane3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AIRPLANE_3)} />
}
