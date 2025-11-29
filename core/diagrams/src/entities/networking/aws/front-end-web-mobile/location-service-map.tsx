import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION_SERVICE_MAP = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.location_service_map;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function LocationServiceMap(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCATION_SERVICE_MAP)} />
}
