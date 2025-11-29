import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICES_CLASSIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cloud_Services_Classic.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function CloudServicesClassic(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CLOUD_SERVICES_CLASSIC)} />
  )
}
