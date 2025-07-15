import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINK = {
  _style: 'shape=link;html=1;',
  _width: 100,
  _height: 0,
}

export function Link(props: DiagramNodeProps) {
  return <Dependency {...LINK} {...props} />
}
