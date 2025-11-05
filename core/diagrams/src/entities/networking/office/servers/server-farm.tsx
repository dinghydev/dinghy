import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_FARM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_farm;',
  },
  _original_width: 56,
  _original_height: 49,
}

export function ServerFarm(props: NodeProps) {
  return (
    <Shape
      {...SERVER_FARM}
      {...props}
      _style={extendStyle(SERVER_FARM, props)}
    />
  )
}
