import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_RACK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.server_rack;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ServerRack(props: NodeProps) {
  return (
    <Shape
      {...SERVER_RACK}
      {...props}
      _style={extendStyle(SERVER_RACK, props)}
    />
  )
}
