import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIDIRECTIONAL_DATA_FLOW = {
  _style: {
    dependency: 'endArrow=classic;startArrow=classic;html=1;fontColor=#FF3333;',
  },
}

export function BidirectionalDataFlow(props: NodeProps) {
  return (
    <Dependency
      {...BIDIRECTIONAL_DATA_FLOW}
      {...props}
      _style={extendStyle(BIDIRECTIONAL_DATA_FLOW, props)}
    />
  )
}
