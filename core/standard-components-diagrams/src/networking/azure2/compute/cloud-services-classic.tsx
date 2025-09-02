import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVICES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Cloud_Services_Classic.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 52,
}

export function CloudServicesClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICES_CLASSIC}
      {...props}
      _style={extendStyle(CLOUD_SERVICES_CLASSIC, props)}
    />
  )
}
