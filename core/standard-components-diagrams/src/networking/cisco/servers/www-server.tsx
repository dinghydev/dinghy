import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WWW_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.www_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 66,
  _height: 67,
}

export function WwwServer(props: DiagramNodeProps) {
  return (
    <Shape {...WWW_SERVER} {...props} _style={extendStyle(WWW_SERVER, props)} />
  )
}
