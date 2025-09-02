import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_DATABASE_POOLS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Elastic_Database_Pools.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
