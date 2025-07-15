import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IVISION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ivision;',
  _width: 55.2,
  _height: 54.900000000000006,
}

export function Ivision(props: DiagramNodeProps) {
  return <Shape {...IVISION} {...props} />
}
