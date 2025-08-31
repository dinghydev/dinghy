import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOST_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Host_Pools.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function HostPools(props: DiagramNodeProps) {
  return (
    <Shape {...HOST_POOLS} {...props} _style={extendStyle(HOST_POOLS, props)} />
  )
}
