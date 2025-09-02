import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BPSTUDIO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bpstudio;',
  },
  _original_width: 50.099999999999994,
  _original_height: 36.3,
}

export function Bpstudio(props: DiagramNodeProps) {
  return (
    <Shape {...BPSTUDIO} {...props} _style={extendStyle(BPSTUDIO, props)} />
  )
}
