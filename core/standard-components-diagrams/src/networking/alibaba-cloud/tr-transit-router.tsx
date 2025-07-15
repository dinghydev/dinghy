import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TR_TRANSIT_ROUTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.tr_transit_router;',
  _width: 52.5,
  _height: 52.5,
}

export function TrTransitRouter(props: DiagramNodeProps) {
  return <Shape {...TR_TRANSIT_ROUTER} {...props} />
}
