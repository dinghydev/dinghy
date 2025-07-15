import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_DEVOPS_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Managed_DevOps_Pools.svg;',
  _width: 68,
  _height: 68,
}

export function ManagedDevopsPools(props: DiagramNodeProps) {
  return <Shape {...MANAGED_DEVOPS_POOLS} {...props} />
}
