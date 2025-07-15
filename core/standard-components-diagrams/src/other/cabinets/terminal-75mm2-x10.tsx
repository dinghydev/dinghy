import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_75MM2_X10 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_75mm2_x10;',
  _width: 150,
  _height: 70,
}

export function Terminal75mm2X10(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_75MM2_X10} {...props} />
}
