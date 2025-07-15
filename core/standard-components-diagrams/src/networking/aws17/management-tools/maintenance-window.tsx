import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAINTENANCE_WINDOW = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.maintenance_window;fillColor=#759C3E;gradientColor=none;',
  _width: 75,
  _height: 78,
}

export function MaintenanceWindow(props: DiagramNodeProps) {
  return <Shape {...MAINTENANCE_WINDOW} {...props} />
}
