import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMALL_BOAT_LAUNCH = {
  _style:
    'shape=mxgraph.signs.sports.small_boat_launch;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 100,
  _height: 93,
}

export function SmallBoatLaunch(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMALL_BOAT_LAUNCH}
      {...props}
      _style={extendStyle(SMALL_BOAT_LAUNCH, props)}
    />
  )
}
