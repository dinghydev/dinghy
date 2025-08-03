import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_ELASTIC_POOLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Elastic_Pools.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function SqlElasticPools(props: DiagramNodeProps) {
  return <Shape {...SQL_ELASTIC_POOLS} {...props} />
}
