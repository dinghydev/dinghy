import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOST_POOLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Host_Pools.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function HostPools(props: NodeProps) {
  return (
    <Shape {...HOST_POOLS} {...props} _style={extendStyle(HOST_POOLS, props)} />
  )
}
