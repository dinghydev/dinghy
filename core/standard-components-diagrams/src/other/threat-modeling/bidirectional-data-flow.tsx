import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIDIRECTIONAL_DATA_FLOW = {
  _style: {
    dependency: 'endArrow=classic;startArrow=classic;html=1;fontColor=#FF3333;',
  },
}

export function BidirectionalDataFlow(props: DiagramNodeProps) {
  return <Dependency {...BIDIRECTIONAL_DATA_FLOW} {...props} />
}
