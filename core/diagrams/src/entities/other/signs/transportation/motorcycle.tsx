import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTORCYCLE = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.motorcycle;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 66,
}

export function Motorcycle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOTORCYCLE)} />
}
