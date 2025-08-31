import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCATION_SERVICE_MAP = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.location_service_map;',
  _width: 48,
  _height: 48,
}

export function LocationServiceMap(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCATION_SERVICE_MAP}
      {...props}
      _style={extendStyle(LOCATION_SERVICE_MAP, props)}
    />
  )
}
