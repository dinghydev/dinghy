import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BED_DOUBLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bed_double;',
  },
  _width: 200,
  _height: 180,
}

export function BedDouble(props: DiagramNodeProps) {
  return (
    <Shape {...BED_DOUBLE} {...props} _style={extendStyle(BED_DOUBLE, props)} />
  )
}
