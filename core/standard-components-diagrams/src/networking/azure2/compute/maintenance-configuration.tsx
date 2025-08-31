import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINTENANCE_CONFIGURATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Maintenance_Configuration.svg;strokeColor=none;',
  _width: 68,
  _height: 64,
}

export function MaintenanceConfiguration(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAINTENANCE_CONFIGURATION}
      {...props}
      _style={extendStyle(MAINTENANCE_CONFIGURATION, props)}
    />
  )
}
