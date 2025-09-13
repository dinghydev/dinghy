import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOAT_LAUNCH = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.boat_launch;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 52,
}

export function BoatLaunch(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOAT_LAUNCH}
      {...props}
      _style={extendStyle(BOAT_LAUNCH, props)}
    />
  )
}
