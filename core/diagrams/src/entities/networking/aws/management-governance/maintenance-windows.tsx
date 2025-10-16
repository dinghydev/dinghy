import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAINTENANCE_WINDOWS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.maintenance_windows;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function MaintenanceWindows(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAINTENANCE_WINDOWS}
      {...props}
      _style={extendStyle(MAINTENANCE_WINDOWS, props)}
    />
  )
}
