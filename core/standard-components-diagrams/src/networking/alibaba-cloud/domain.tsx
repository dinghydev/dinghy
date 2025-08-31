import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOMAIN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.domain;',
  },
  _width: 60,
  _height: 60,
}

export function Domain(props: DiagramNodeProps) {
  return <Shape {...DOMAIN} {...props} _style={extendStyle(DOMAIN, props)} />
}
