import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MINIAPPDEV = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.miniappdev;',
  _width: 49.199999999999996,
  _height: 35.699999999999996,
}

export function Miniappdev(props: DiagramNodeProps) {
  return <Shape {...MINIAPPDEV} {...props} />
}
