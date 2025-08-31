import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_PRIVATE_NETWORK_CONNECTOR = {
  _style:
    'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=virtual_private_network_connector;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 64,
  _height: 50,
}

export function VirtualPrivateNetworkConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_PRIVATE_NETWORK_CONNECTOR}
      {...props}
      _style={extendStyle(VIRTUAL_PRIVATE_NETWORK_CONNECTOR, props)}
    />
  )
}
