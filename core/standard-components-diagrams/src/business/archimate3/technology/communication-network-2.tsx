import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATION_NETWORK_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.network;',
  _width: 65,
  _height: 50,
}

export function CommunicationNetwork2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATION_NETWORK_2}
      {...props}
      _style={extendStyle(COMMUNICATION_NETWORK_2, props)}
    />
  )
}
