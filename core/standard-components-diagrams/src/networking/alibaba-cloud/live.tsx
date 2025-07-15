import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIVE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.live;',
  _width: 48.9,
  _height: 44.7,
}

export function Live(props: DiagramNodeProps) {
  return <Shape {...LIVE} {...props} />
}
