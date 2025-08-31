import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_SERVICE_FABRIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Managed_Service_Fabric.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 66,
}

export function ManagedServiceFabric(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_SERVICE_FABRIC}
      {...props}
      _style={extendStyle(MANAGED_SERVICE_FABRIC, props)}
    />
  )
}
