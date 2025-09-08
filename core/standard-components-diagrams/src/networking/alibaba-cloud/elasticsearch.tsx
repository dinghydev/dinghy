import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELASTICSEARCH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.elasticsearch;',
  },
  _original_width: 45.9,
  _original_height: 50.099999999999994,
}

export function Elasticsearch(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTICSEARCH}
      {...props}
      _style={extendStyle(ELASTICSEARCH, props)}
    />
  )
}
