import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIDIRECTIONAL_DATA_FLOW = {
  _style: 'endArrow=classic;startArrow=classic;html=1;fontColor=#FF3333;',
  _width: 50,
  _height: 50,
}

export function BidirectionalDataFlow(props: DiagramNodeProps) {
  return <Dependency {...BIDIRECTIONAL_DATA_FLOW} {...props} />
}
