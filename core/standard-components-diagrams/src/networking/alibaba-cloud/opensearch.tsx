import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPENSEARCH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.opensearch;',
  },
  _width: 60.3,
  _height: 60,
}

export function Opensearch(props: DiagramNodeProps) {
  return (
    <Shape {...OPENSEARCH} {...props} _style={extendStyle(OPENSEARCH, props)} />
  )
}
