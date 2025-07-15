import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_2 = {
  _style: 'endArrow=block;startArrow=block;endFill=1;startFill=1;html=1;',
  _width: 160,
  _height: 0,
}

export function Association2(props: DiagramNodeProps) {
  return <Dependency {...ASSOCIATION_2} {...props} />
}
