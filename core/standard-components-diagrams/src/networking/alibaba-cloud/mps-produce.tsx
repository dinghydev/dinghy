import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MPS_PRODUCE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-produce;',
  _width: 60.6,
  _height: 52.5,
}

export function MpsProduce(props: DiagramNodeProps) {
  return <Shape {...MPS_PRODUCE} {...props} />
}
