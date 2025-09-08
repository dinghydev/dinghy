import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUND_TRANSPORTATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.ground_transportation;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 62,
}

export function GroundTransportation(props: DiagramNodeProps) {
  return (
    <Shape
      {...GROUND_TRANSPORTATION}
      {...props}
      _style={extendStyle(GROUND_TRANSPORTATION, props)}
    />
  )
}
