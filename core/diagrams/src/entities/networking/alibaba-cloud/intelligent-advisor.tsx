import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTELLIGENT_ADVISOR = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.intelligent_advisor;',
  },
  _original_width: 47.1,
  _original_height: 54.900000000000006,
}

export function IntelligentAdvisor(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTELLIGENT_ADVISOR}
      {...props}
      _style={extendStyle(INTELLIGENT_ADVISOR, props)}
    />
  )
}
