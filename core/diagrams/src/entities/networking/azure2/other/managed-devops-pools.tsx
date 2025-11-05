import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGED_DEVOPS_POOLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Managed_DevOps_Pools.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ManagedDevopsPools(props: NodeProps) {
  return (
    <Shape
      {...MANAGED_DEVOPS_POOLS}
      {...props}
      _style={extendStyle(MANAGED_DEVOPS_POOLS, props)}
    />
  )
}
