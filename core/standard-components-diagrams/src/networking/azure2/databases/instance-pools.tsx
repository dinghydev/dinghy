import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANCE_POOLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Instance_Pools.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 64,
}

export function InstancePools(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSTANCE_POOLS}
      {...props}
      _style={extendStyle(INSTANCE_POOLS, props)}
    />
  )
}
