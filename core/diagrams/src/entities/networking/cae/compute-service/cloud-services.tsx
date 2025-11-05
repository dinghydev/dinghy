import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cloud_Service.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function CloudServices(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICES}
      {...props}
      _style={extendStyle(CLOUD_SERVICES, props)}
    />
  )
}
