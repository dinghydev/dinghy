import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_75MM2 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_75mm2;',
  _width: 15,
  _height: 70,
}

export function Terminal75mm2(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_75MM2} {...props} />
}
