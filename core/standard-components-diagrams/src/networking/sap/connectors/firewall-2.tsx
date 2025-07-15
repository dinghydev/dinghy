import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL_2 = {
  _style:
    'endArrow=none;html=1;strokeColor=#D20A0A;bendable=1;rounded=0;endFill=0;endSize=6;strokeWidth=3;',
  _width: 120,
  _height: 0,
}

export function Firewall2(props: DiagramNodeProps) {
  return <Shape {...FIREWALL_2} {...props} />
}
