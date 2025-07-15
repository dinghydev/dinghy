import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OFFICE_CHAIR = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;',
  _width: 40,
  _height: 43,
}

export function OfficeChair(props: DiagramNodeProps) {
  return <Shape {...OFFICE_CHAIR} {...props} />
}
