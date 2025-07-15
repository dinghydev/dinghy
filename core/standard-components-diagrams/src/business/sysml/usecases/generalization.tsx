import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION = {
  _style:
    'edgeStyle=none;html=1;endArrow=block;endFill=0;endSize=12;verticalAlign=bottom;',
  _width: 160,
  _height: 0,
}

export function Generalization(props: DiagramNodeProps) {
  return <Dependency {...GENERALIZATION} {...props} />
}
