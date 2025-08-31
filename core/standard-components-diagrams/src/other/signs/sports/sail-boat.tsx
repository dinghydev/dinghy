import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAIL_BOAT = {
  _style:
    'shape=mxgraph.signs.sports.sail_boat;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 92,
  _height: 99,
}

export function SailBoat(props: DiagramNodeProps) {
  return (
    <Shape {...SAIL_BOAT} {...props} _style={extendStyle(SAIL_BOAT, props)} />
  )
}
