import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDOOR_SWIMMING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.indoor_swimming;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 89,
}

export function IndoorSwimming(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDOOR_SWIMMING}
      {...props}
      _style={extendStyle(INDOOR_SWIMMING, props)}
    />
  )
}
