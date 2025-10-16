import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTIMEDIAAI = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.multimediaai;',
  },
  _original_width: 60,
  _original_height: 59.1,
}

export function Multimediaai(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIMEDIAAI}
      {...props}
      _style={extendStyle(MULTIMEDIAAI, props)}
    />
  )
}
