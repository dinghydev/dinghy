import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATION_NETWORK = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=netw;archiType=square;',
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
