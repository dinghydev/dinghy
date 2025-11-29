import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAINTENANCE_WINDOW = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.maintenance_window;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function MaintenanceWindow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAINTENANCE_WINDOW)} />
}
