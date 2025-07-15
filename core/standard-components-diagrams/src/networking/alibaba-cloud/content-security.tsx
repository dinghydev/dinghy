import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTENT_SECURITY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.content_security;',
  _width: 46.5,
  _height: 47.1,
}

export function ContentSecurity(props: DiagramNodeProps) {
  return <Shape {...CONTENT_SECURITY} {...props} />
}
