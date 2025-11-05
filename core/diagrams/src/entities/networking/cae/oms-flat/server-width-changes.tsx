import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_WIDTH_CHANGES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.server_width_changes',
  },
  _original_width: 47,
  _original_height: 50,
}

export function ServerWidthChanges(props: NodeProps) {
  return (
    <Shape
      {...SERVER_WIDTH_CHANGES}
      {...props}
      _style={extendStyle(SERVER_WIDTH_CHANGES, props)}
    />
  )
}
