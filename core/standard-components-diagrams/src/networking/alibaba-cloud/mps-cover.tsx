import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MPS_COVER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-cover;',
  _width: 56.1,
  _height: 54.900000000000006,
}

export function MpsCover(props: DiagramNodeProps) {
  return <Shape {...MPS_COVER} {...props} />
}
