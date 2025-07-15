import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MPS_AI = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-ai;',
  _width: 52.2,
  _height: 52.5,
}

export function MpsAi(props: DiagramNodeProps) {
  return <Shape {...MPS_AI} {...props} />
}
