import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TR_TRANSIT_ROUTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.tr_transit_router;',
  },
  _original_width: 52.5,
  _original_height: 52.5,
}

export function TrTransitRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TR_TRANSIT_ROUTER)} />
}
