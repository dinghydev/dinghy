import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOLLIPOP_NOTATION = {
  _style:
    'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=halfCircle;endFill=0;endSize=6;strokeWidth=1;sketch=0;',
  _width: 40,
  _height: 10,
}

export function LollipopNotation(props: DiagramNodeProps) {
  return <Shape {...LOLLIPOP_NOTATION} {...props} />
}
