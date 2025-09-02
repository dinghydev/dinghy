import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MPS_AI = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-ai;',
  },
  _original_width: 52.2,
  _original_height: 52.5,
}

export function MpsAi(props: DiagramNodeProps) {
  return <Shape {...MPS_AI} {...props} _style={extendStyle(MPS_AI, props)} />
}
