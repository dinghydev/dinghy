import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_50MM2_X10 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_50mm2_x10;',
  _width: 125,
  _height: 55.00000000000001,
}

export function Terminal50mm2X10(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_50MM2_X10} {...props} />
}
