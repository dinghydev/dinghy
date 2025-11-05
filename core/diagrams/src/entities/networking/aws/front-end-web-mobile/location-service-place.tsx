import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION_SERVICE_PLACE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.location_service_place;',
  },
  _width: 37,
  _height: 48,
}

export function LocationServicePlace(props: NodeProps) {
  return (
    <Shape
      {...LOCATION_SERVICE_PLACE}
      {...props}
      _style={extendStyle(LOCATION_SERVICE_PLACE, props)}
    />
  )
}
