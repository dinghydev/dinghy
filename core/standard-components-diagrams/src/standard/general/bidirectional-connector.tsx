import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIDIRECTIONAL_CONNECTOR = {
  _style: 'endArrow=classic;startArrow=classic;html=1;',
  _width: 50,
  _height: 50,
}

export function BidirectionalConnector(props: DiagramNodeProps) {
  return <Dependency {...BIDIRECTIONAL_CONNECTOR} {...props} />
}
