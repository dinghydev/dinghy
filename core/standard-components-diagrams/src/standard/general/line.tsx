import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINE = {
  _style: 'endArrow=none;html=1;',
  _width: 50,
  _height: 50,
}

export function Line(props: DiagramNodeProps) {
  return <Dependency {...LINE} {...props} />
}
