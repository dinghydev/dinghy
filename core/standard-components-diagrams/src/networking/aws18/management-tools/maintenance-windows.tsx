import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINTENANCE_WINDOWS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.maintenance_windows;',
  },
  _original_width: 60,
  _original_height: 60,
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
