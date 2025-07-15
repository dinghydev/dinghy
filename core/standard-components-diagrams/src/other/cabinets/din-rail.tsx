import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIN_RAIL = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.din_rail;',
  _width: 500,
  _height: 25,
}

export function DinRail(props: DiagramNodeProps) {
  return <Shape {...DIN_RAIL} {...props} />
}
