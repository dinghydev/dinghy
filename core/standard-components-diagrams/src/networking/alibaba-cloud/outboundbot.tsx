import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTBOUNDBOT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.outboundbot;',
  _width: 58.5,
  _height: 58.5,
}

export function Outboundbot(props: DiagramNodeProps) {
  return <Shape {...OUTBOUNDBOT} {...props} />
}
