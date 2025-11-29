import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOAT_LAUNCH = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.boat_launch;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 52,
}

export function BoatLaunch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOAT_LAUNCH)} />
}
