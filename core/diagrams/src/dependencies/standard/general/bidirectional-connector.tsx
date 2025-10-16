import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BIDIRECTIONAL_CONNECTOR = {
  _style: {
    dependency: 'endArrow=classic;startArrow=classic;html=1;',
  },
}

export function BidirectionalConnector(props: DiagramNodeProps) {
  return (
    <Dependency
      {...BIDIRECTIONAL_CONNECTOR}
      {...props}
      _style={extendStyle(BIDIRECTIONAL_CONNECTOR, props)}
    />
  )
}
