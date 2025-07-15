import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIDIRECTIONAL_ARROW = {
  _style: 'shape=flexArrow;endArrow=classic;startArrow=classic;html=1;',
  _width: 100,
  _height: 100,
}

export function BidirectionalArrow(props: DiagramNodeProps) {
  return <Dependency {...BIDIRECTIONAL_ARROW} {...props} />
}
