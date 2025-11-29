import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTIC_WEB_HOSTING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.elastic_web_hosting;',
  },
  _original_width: 53.4,
  _original_height: 51.3,
}

export function ElasticWebHosting(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ELASTIC_WEB_HOSTING)} />
}
