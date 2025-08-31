import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTICACHE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elasticache;fillColor=#2E73B8;gradientColor=none;',
  },
  _width: 67.5,
  _height: 81,
}

export function Elasticache(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTICACHE}
      {...props}
      _style={extendStyle(ELASTICACHE, props)}
    />
  )
}
