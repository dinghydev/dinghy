import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BASTIONHOST = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bastionhost;',
  _width: 50.4,
  _height: 39.900000000000006,
}

export function Bastionhost(props: DiagramNodeProps) {
  return <Shape {...BASTIONHOST} {...props} />
}
