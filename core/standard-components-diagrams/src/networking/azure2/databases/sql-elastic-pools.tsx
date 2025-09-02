import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_ELASTIC_POOLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Elastic_Pools.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SqlElasticPools(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_ELASTIC_POOLS}
      {...props}
      _style={extendStyle(SQL_ELASTIC_POOLS, props)}
    />
  )
}
