import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_FABRIC = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Fabric.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
