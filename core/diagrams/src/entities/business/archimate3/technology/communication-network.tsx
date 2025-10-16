import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMUNICATION_NETWORK = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=netw;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function CommunicationNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATION_NETWORK}
      {...props}
      _style={extendStyle(COMMUNICATION_NETWORK, props)}
    />
  )
}
