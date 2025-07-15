import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW = {
  _style: 'shape=flexArrow;endArrow=classic;html=1;',
  _width: 50,
  _height: 50,
}

export function Arrow(props: DiagramNodeProps) {
  return <Dependency {...ARROW} {...props} />
}
