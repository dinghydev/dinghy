import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BED_DOUBLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bed_double;',
  _width: 200,
  _height: 180,
}

export function BedDouble(props: DiagramNodeProps) {
  return <Shape {...BED_DOUBLE} {...props} />
}
