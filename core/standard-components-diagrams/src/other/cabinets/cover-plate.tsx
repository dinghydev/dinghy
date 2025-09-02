import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COVER_PLATE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.coverPlate',
  },
  _original_width: 220.00000000000003,
  _original_height: 125,
}

export function CoverPlate(props: DiagramNodeProps) {
  return (
    <Shape
      {...COVER_PLATE}
      {...props}
      _style={extendStyle(COVER_PLATE, props)}
    />
  )
}
