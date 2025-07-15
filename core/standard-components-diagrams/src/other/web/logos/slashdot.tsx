import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLASHDOT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.slashdot;fillColor=#026664;strokeColor=none',
  _width: 52.400000000000006,
  _height: 62,
}

export function Slashdot(props: DiagramNodeProps) {
  return <Shape {...SLASHDOT} {...props} />
}
