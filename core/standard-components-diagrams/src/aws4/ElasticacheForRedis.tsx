import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTICACHE_FOR_REDIS = {
  _color: { color: '#C925D1', fill: true },
  _border: 0,
  _shape: 'mxgraph.aws4.elasticache_for_redis',
}

export function ElasticacheForRedis(props: DiagramNodeProps) {
  return <Shape {...ELASTICACHE_FOR_REDIS} {...props} />
}
