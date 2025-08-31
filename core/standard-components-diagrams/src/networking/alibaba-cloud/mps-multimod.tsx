import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MPS_MULTIMOD = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-multimod;',
  },
  _width: 60.6,
  _height: 54.900000000000006,
}

export function MpsMultimod(props: DiagramNodeProps) {
  return (
    <Shape
      {...MPS_MULTIMOD}
      {...props}
      _style={extendStyle(MPS_MULTIMOD, props)}
    />
  )
}
