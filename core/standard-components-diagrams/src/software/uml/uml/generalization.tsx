import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION = {
  _style: 'endArrow=block;endSize=16;endFill=0;html=1;',
  _width: 160,
  _height: 0,
}

export function Generalization(props: DiagramNodeProps) {
  return <Dependency {...GENERALIZATION} {...props} />
}
