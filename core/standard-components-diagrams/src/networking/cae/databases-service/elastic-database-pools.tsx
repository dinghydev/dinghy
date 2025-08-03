import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_DATABASE_POOLS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Elastic_Database_Pools.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function ElasticDatabasePools(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_DATABASE_POOLS} {...props} />
}
