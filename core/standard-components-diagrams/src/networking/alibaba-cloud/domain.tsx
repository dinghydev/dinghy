import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOMAIN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.domain;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function Domain(props: DiagramNodeProps) {
  return <Shape {...DOMAIN} {...props} _style={extendStyle(DOMAIN, props)} />
}
