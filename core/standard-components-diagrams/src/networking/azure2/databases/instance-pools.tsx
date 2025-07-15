import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCE_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Instance_Pools.svg;',
  _width: 65,
  _height: 64,
}

export function InstancePools(props: DiagramNodeProps) {
  return <Shape {...INSTANCE_POOLS} {...props} />
}
