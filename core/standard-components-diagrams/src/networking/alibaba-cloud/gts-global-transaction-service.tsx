import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GTS_GLOBAL_TRANSACTION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gts_global_transaction_service;',
  },
  _width: 47.400000000000006,
  _height: 48,
}

export function GtsGlobalTransactionService(props: DiagramNodeProps) {
  return (
    <Shape
      {...GTS_GLOBAL_TRANSACTION_SERVICE}
      {...props}
      _style={extendStyle(GTS_GLOBAL_TRANSACTION_SERVICE, props)}
    />
  )
}
