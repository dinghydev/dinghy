import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GTS_GLOBAL_TRANSACTION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gts_global_transaction_service;',
  },
  _original_width: 47.400000000000006,
  _original_height: 48,
}

export function GtsGlobalTransactionService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, GTS_GLOBAL_TRANSACTION_SERVICE)}
    />
  )
}
