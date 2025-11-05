import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRIVING_TOUR = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.driving_tour;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 92,
  _original_height: 99,
}

export function DrivingTour(props: NodeProps) {
  return (
    <Shape
      {...DRIVING_TOUR}
      {...props}
      _style={extendStyle(DRIVING_TOUR, props)}
    />
  )
}
