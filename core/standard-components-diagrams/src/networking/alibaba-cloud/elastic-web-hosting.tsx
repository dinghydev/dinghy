import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_WEB_HOSTING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.elastic_web_hosting;',
  _width: 53.4,
  _height: 51.3,
}

export function ElasticWebHosting(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_WEB_HOSTING} {...props} />
}
