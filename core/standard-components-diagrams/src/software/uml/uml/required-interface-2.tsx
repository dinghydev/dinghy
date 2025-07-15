import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIRED_INTERFACE_2 = {
  _style:
    'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=halfCircle;endFill=0;endSize=6;strokeWidth=1;sketch=0;fontSize=12;curved=1;',
  _width: 20,
  _height: 20,
}

export function RequiredInterface2(props: DiagramNodeProps) {
  return <Shape {...REQUIRED_INTERFACE_2} {...props} />
}
