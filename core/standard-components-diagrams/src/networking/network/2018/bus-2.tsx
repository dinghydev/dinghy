import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUS_2 = {
  _style:
    'strokeColor=#6881B3;edgeStyle=none;rounded=0;endArrow=none;html=1;strokeWidth=2;',
  _width: 1,
  _height: 140,
}

export function Bus2(props: DiagramNodeProps) {
  return <Shape {...BUS_2} {...props} />
}
