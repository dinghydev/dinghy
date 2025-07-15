import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOLLIPOP_NOTATION_2 = {
  _style:
    'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=oval;endFill=0;sketch=0;sourcePerimeterSpacing=0;targetPerimeterSpacing=0;endSize=10;',
  _width: 1,
  _height: 10,
}

export function LollipopNotation2(props: DiagramNodeProps) {
  return <Shape {...LOLLIPOP_NOTATION_2} {...props} />
}
