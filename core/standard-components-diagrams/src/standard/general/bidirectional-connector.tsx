import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIDIRECTIONAL_CONNECTOR = {
  _style: {
    dependency: 'endArrow=classic;startArrow=classic;html=1;',
  },
}

export function BidirectionalConnector(props: DiagramNodeProps) {
  return <Dependency {...BIDIRECTIONAL_CONNECTOR} {...props} />
}
