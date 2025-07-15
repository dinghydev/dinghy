import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_50MM2 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_50mm2;',
  _width: 12.5,
  _height: 55.00000000000001,
}

export function Terminal50mm2(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_50MM2} {...props} />
}
