import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDSIMPLE_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Services.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CloudsimpleServices(props: NodeProps) {
  return (
    <Shape
      {...CLOUDSIMPLE_SERVICES}
      {...props}
      _style={extendStyle(CLOUDSIMPLE_SERVICES, props)}
    />
  )
}
