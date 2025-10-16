import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OUTBOUNDBOT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.outboundbot;',
  },
  _original_width: 58.5,
  _original_height: 58.5,
}

export function Outboundbot(props: DiagramNodeProps) {
  return (
    <Shape
      {...OUTBOUNDBOT}
      {...props}
      _style={extendStyle(OUTBOUNDBOT, props)}
    />
  )
}
