import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE_FABRIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Fabric.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ServiceFabric(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_FABRIC}
      {...props}
      _style={extendStyle(SERVICE_FABRIC, props)}
    />
  )
}
