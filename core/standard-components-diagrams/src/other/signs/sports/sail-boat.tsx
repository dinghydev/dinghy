import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAIL_BOAT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.sail_boat;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 92,
  _original_height: 99,
}

export function SailBoat(props: DiagramNodeProps) {
  return (
    <Shape {...SAIL_BOAT} {...props} _style={extendStyle(SAIL_BOAT, props)} />
  )
}
