import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_ELASTIC_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Elastic_Pools.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
