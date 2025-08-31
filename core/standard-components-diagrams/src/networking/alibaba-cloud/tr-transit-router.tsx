import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TR_TRANSIT_ROUTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.tr_transit_router;',
  },
  _width: 60,
  _height: 60,
}

export function TrTransitRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...TR_TRANSIT_ROUTER}
      {...props}
      _style={extendStyle(TR_TRANSIT_ROUTER, props)}
    />
  )
}
