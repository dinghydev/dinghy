import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROCK_CLIMBING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rock_climbing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 76,
  _height: 98,
}

export function RockClimbing(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROCK_CLIMBING)} />
}
