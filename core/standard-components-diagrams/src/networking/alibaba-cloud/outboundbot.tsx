import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTBOUNDBOT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.outboundbot;',
  _width: 60,
  _height: 60,
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
