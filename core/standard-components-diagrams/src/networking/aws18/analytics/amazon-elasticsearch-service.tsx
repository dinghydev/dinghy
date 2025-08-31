import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMAZON_ELASTICSEARCH_SERVICE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.elasticsearch_service;',
  },
  _width: 80,
  _height: 120,
}

export function AmazonElasticsearchService(props: DiagramNodeProps) {
  return (
    <Shape
      {...AMAZON_ELASTICSEARCH_SERVICE}
      {...props}
      _style={extendStyle(AMAZON_ELASTICSEARCH_SERVICE, props)}
    />
  )
}
