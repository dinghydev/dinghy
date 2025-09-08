import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCATION_SERVICE_GEOFENCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.location_service_geofence;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function LocationServiceGeofence(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCATION_SERVICE_GEOFENCE}
      {...props}
      _style={extendStyle(LOCATION_SERVICE_GEOFENCE, props)}
    />
  )
}
