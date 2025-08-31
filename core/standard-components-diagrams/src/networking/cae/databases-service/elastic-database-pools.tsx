import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_DATABASE_POOLS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Elastic_Database_Pools.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ElasticDatabasePools(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_DATABASE_POOLS}
      {...props}
      _style={extendStyle(ELASTIC_DATABASE_POOLS, props)}
    />
  )
}
