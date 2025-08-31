import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATIONS_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.communications_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 54,
  _height: 56,
}

export function CommunicationsServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATIONS_SERVER}
      {...props}
      _style={extendStyle(COMMUNICATIONS_SERVER, props)}
    />
  )
}
