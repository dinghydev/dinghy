import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.user;',
  _width: 60,
  _height: 60,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
