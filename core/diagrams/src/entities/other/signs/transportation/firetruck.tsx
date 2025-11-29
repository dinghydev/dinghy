import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIRETRUCK = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.firetruck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 31,
}

export function Firetruck(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIRETRUCK)} />
}
