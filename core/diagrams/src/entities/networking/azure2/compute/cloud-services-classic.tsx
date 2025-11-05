import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Cloud_Services_Classic.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 52,
}

export function CloudServicesClassic(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICES_CLASSIC}
      {...props}
      _style={extendStyle(CLOUD_SERVICES_CLASSIC, props)}
    />
  )
}
