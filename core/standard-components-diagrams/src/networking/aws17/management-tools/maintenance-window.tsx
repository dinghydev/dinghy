import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINTENANCE_WINDOW = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.maintenance_window;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function MaintenanceWindow(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAINTENANCE_WINDOW}
      {...props}
      _style={extendStyle(MAINTENANCE_WINDOW, props)}
    />
  )
}
