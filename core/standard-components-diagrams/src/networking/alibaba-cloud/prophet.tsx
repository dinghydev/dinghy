import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROPHET = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.prophet;',
  _width: 46.800000000000004,
  _height: 47.7,
}

export function Prophet(props: DiagramNodeProps) {
  return <Shape {...PROPHET} {...props} />
}
