import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLASHDOT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.slashdot;fillColor=#03B2AC;gradientColor=#012C2C',
  _width: 102.4,
  _height: 102.4,
}

export function Slashdot(props: DiagramNodeProps) {
  return <Shape {...SLASHDOT} {...props} />
}
