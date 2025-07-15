import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIVINGLINK = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.livinglink;',
  _width: 43.8,
  _height: 50.699999999999996,
}

export function Livinglink(props: DiagramNodeProps) {
  return <Shape {...LIVINGLINK} {...props} />
}
