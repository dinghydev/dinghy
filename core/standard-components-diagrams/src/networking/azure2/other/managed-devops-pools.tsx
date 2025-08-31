import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_DEVOPS_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Managed_DevOps_Pools.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ManagedDevopsPools(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_DEVOPS_POOLS}
      {...props}
      _style={extendStyle(MANAGED_DEVOPS_POOLS, props)}
    />
  )
}
