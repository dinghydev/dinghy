import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTICACHE_FOR_VALKEY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elasticache_for_valkey;',
  _width: 78,
  _height: 69,
}

export function ElasticacheForValkey(props: DiagramNodeProps) {
  return <Shape {...ELASTICACHE_FOR_VALKEY} {...props} />
}
