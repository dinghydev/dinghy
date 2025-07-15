import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.router;',
  _width: 55.2,
  _height: 57.599999999999994,
}

export function Router(props: DiagramNodeProps) {
  return <Shape {...ROUTER} {...props} />
}
