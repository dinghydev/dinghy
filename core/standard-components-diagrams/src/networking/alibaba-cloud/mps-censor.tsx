import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MPS_CENSOR = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-censor;',
  _width: 56.1,
  _height: 54.900000000000006,
}

export function MpsCensor(props: DiagramNodeProps) {
  return (
    <Shape {...MPS_CENSOR} {...props} _style={extendStyle(MPS_CENSOR, props)} />
  )
}
