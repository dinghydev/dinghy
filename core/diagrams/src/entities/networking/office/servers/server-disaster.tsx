import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_DISASTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_disaster;',
  },
  _original_width: 46,
  _original_height: 57,
}

export function ServerDisaster(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_DISASTER}
      {...props}
      _style={extendStyle(SERVER_DISASTER, props)}
    />
  )
}
