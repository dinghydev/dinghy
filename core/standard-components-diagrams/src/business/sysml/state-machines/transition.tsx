import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSITION = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;endSize=12;strokeWidth=3;verticalAlign=bottom;',
  _width: 160,
  _height: 0,
}

export function Transition(props: DiagramNodeProps) {
  return <Dependency {...TRANSITION} {...props} />
}
