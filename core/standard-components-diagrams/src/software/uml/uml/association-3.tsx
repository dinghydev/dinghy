import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_3 = {
  _style: 'endArrow=open;endFill=1;endSize=12;html=1;',
  _width: 160,
  _height: 0,
}

export function Association3(props: DiagramNodeProps) {
  return <Dependency {...ASSOCIATION_3} {...props} />
}
