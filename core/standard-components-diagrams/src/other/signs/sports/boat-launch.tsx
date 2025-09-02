import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOAT_LAUNCH = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.boat_launch;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 52,
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
