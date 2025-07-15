import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_AUTH = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_auth;',
  _width: 60,
  _height: 54.6,
}

export function CloudAuth(props: DiagramNodeProps) {
  return <Shape {...CLOUD_AUTH} {...props} />
}
