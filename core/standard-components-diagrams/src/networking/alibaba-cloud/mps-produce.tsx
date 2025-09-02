import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MPS_PRODUCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-produce;',
  },
  _original_width: 60.6,
  _original_height: 52.5,
}

export function MpsProduce(props: DiagramNodeProps) {
  return (
    <Shape
      {...MPS_PRODUCE}
      {...props}
      _style={extendStyle(MPS_PRODUCE, props)}
    />
  )
}
