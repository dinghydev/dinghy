import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTICSEARCH_SERVICE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elasticsearch_service;fillColor=#F58534;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function ElasticsearchService(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTICSEARCH_SERVICE}
      {...props}
      _style={extendStyle(ELASTICSEARCH_SERVICE, props)}
    />
  )
}
