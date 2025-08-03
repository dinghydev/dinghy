import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOST_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Host_Pools.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function HostPools(props: DiagramNodeProps) {
  return <Shape {...HOST_POOLS} {...props} />
}
