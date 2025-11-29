import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_CENTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.control_center;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ControlCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROL_CENTER)} />
}
