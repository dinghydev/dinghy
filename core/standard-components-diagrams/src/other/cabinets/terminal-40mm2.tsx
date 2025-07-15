import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_40MM2 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_40mm2;',
  _width: 11,
  _height: 50,
}

export function Terminal40mm2(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_40MM2} {...props} />
}
