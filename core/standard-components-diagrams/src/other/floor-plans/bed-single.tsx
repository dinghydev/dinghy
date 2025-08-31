import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BED_SINGLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bed_single;',
  _width: 100,
  _height: 180,
}

export function BedSingle(props: DiagramNodeProps) {
  return (
    <Shape {...BED_SINGLE} {...props} _style={extendStyle(BED_SINGLE, props)} />
  )
}
