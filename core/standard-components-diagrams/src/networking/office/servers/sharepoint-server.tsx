import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHAREPOINT_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.sharepoint_server;',
  },
  _original_width: 56,
  _original_height: 55,
}

export function SharepointServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHAREPOINT_SERVER}
      {...props}
      _style={extendStyle(SHAREPOINT_SERVER, props)}
    />
  )
}
