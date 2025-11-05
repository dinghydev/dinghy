import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRADEMARK_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.trademark_service;',
  },
  _original_width: 47.400000000000006,
  _original_height: 53.1,
}

export function TrademarkService(props: NodeProps) {
  return (
    <Shape
      {...TRADEMARK_SERVICE}
      {...props}
      _style={extendStyle(TRADEMARK_SERVICE, props)}
    />
  )
}
