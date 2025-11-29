import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIRPLANE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 102,
  _height: 57,
}

export function Airplane2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AIRPLANE_2)} />
}
