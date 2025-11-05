import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGED_SERVICE_FABRIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Managed_Service_Fabric.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function ManagedServiceFabric(props: NodeProps) {
  return (
    <Shape
      {...MANAGED_SERVICE_FABRIC}
      {...props}
      _style={extendStyle(MANAGED_SERVICE_FABRIC, props)}
    />
  )
}
